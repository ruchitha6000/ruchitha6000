package com.hms.service;



import java.time.LocalDateTime;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.hms.model.Appointment;
import com.hms.model.Doctor;
import com.hms.model.Patient;
import com.hms.model.Prescription;
import com.hms.model.User;
import com.hms.repository.AppointmentRepo;
import com.hms.repository.DoctorRepo;
import com.hms.repository.PatientRepo;
import com.hms.repository.PrescriptionRepo;
import com.hms.repository.UserRepo;

@Service
public class HmsService {
	
	
	@Autowired
    private UserRepo userRepo;

    @Autowired
    private PatientRepo patientRepo;

    @Autowired
    private DoctorRepo doctorRepo;

    @Autowired
    private AppointmentRepo appointmentRepo;

    @Autowired
    private PrescriptionRepo prescriptionRepo;

    // Save User
    public User saveUser(User user) {
        return userRepo.save(user);
    }
    
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepo.findByUsername(username)
            .orElseThrow(() -> new UsernameNotFoundException("User not found"));

        return new org.springframework.security.core.userdetails.User(
            user.getUsername(), 
            user.getPassword(), 
            Collections.singletonList(new SimpleGrantedAuthority(user.getRole().name()))
        );
    }

    // Save Patient
    public Patient savePatient(Patient patient) {
        return patientRepo.save(patient);
    }

    // Save Doctor
    public Doctor saveDoctor(Doctor doctor) {
        return doctorRepo.save(doctor);
    }

    // Save Appointment
    public Appointment saveAppointment(Appointment appointment) {
        return appointmentRepo.save(appointment);
    }

    // Save Prescription
    public Prescription savePrescription(Prescription prescription) {
        return prescriptionRepo.save(prescription);
    }

    // Get All Users
    public List<User> getUsers() {
        return userRepo.findAll();
    }

    // Get All Patients
    public List<Patient> getPatients() {
        return patientRepo.findAll();
    }

    // Get All Doctors
    public List<Doctor> getDoctors() {
        return doctorRepo.findAll();
    }

    // Get All Appointments
    public List<Appointment> getAppointments() {
        return appointmentRepo.findAll();
    }

    // Get All Prescriptions
    public List<Prescription> getPrescriptions() {
        return prescriptionRepo.findAll();
    }
    
    public List<Prescription> getPrescriptionsByPatient(Patient patient) {
        return prescriptionRepo.findByPatient(patient);
    }

    // Get User by ID
    public Optional<User> getUserById(Long id) {
        return userRepo.findById(id);
    }

    // Get Patient by ID
    public Optional<Patient> getPatientById(Long id) {
        return patientRepo.findById(id);
    }

    // Get Doctor by ID
    public Optional<Doctor> getDoctorById(Long id) {
        return doctorRepo.findById(id);
    }

    // Get Appointment by ID
    public Optional<Appointment> getAppointmentById(Long id) {
        return appointmentRepo.findById(id);
    }

    // Get Prescription by ID
    public Optional<Prescription> getPrescriptionById(Long id) {
        return prescriptionRepo.findById(id);
    }
    
 // Fetch all prescriptions for a patient
    public List<Prescription> getPrescriptionsByPatient(User user) {
        // Get the patient linked to the logged-in user
        Patient patient = user.getPatient();
        if (patient == null) {
            throw new RuntimeException("Patient record not found");
        }
        return prescriptionRepo.findByPatient(patient);
    }
    
    public Patient updatePatient(Long patientId, Patient updatedPatient, String username) {
        Optional<Patient> existingPatient = patientRepo.findById(patientId);
        Optional<User> user = userRepo.findByUsername(username);

        if (existingPatient.isPresent() && user.isPresent()) {
            Patient patient = existingPatient.get();
            User updatingUser = user.get();

            // Check if user is allowed to update
            if (updatingUser.getRole().equals("ADMIN") || patient.getUser().getId().equals(updatingUser.getId())) {
                patient.setFirstName(updatedPatient.getFirstName());
                patient.setLastName(updatedPatient.getLastName());
                patient.setContact(updatedPatient.getContact());
                patient.setAddress(updatedPatient.getAddress());
                patient.setDob(updatedPatient.getDob());
                patient.setGender(updatedPatient.getGender());

                return patientRepo.save(patient);
            } else {
                throw new RuntimeException("Unauthorized: Patients can only update their own details.");
            }
        } else {
            throw new UsernameNotFoundException("Patient/User not found.");
        }
    }
    
    
//    public Patient updatePatientDetails(Long patient_id, Patient updatedPatient) {
//        // Find the patient by ID
//        Patient existingPatient = patientRepo.findById(patient_id)
//                .orElseThrow(() -> new RuntimeException("Patient not found"));
//
//        // Update the patient details with the new data
//        existingPatient.setFirstName(updatedPatient.getFirstName());
//        existingPatient.setLastName(updatedPatient.getLastName());
//        existingPatient.setContact(updatedPatient.getContact());
//        existingPatient.setAddress(updatedPatient.getAddress());
//        existingPatient.setDob(updatedPatient.getDob());
//
//        // Save the updated patient details to the database
//        return patientRepo.save(existingPatient);
//    }
    
//    public void deletePatient(Long id) {
//        if (!patientRepo.existsById(id)) {
//            throw new ResourceNotFoundException("Patient not found with ID: " + id);
//        }
//        patientRepo.deleteById(id);
//    }

    
    public boolean isDoctorAvailable(Doctor doctor, LocalDateTime appointmentTime) {
        List<Appointment> existingAppointments = appointmentRepo
            .findByDoctorAndAppointmentTime(doctor, appointmentTime);
        
        return existingAppointments.isEmpty(); // If no existing appointment, doctor is available
    }
    
    public List<Patient> getPatientsForDoctor(Doctor doctor) {
        return patientRepo.findByAppointmentsDoctorId(doctor.getDoctorId());
    }
      
    public List<Appointment> getAppointmentsForDoctor(User user) {
        Optional<Doctor> doctor = doctorRepo.findByUser(user);
        return doctor.map(d -> 
            appointmentRepo.findByDoctorDoctorId(d.getDoctorId())
        ).orElse(Collections.emptyList());
    }
    

    public List<Prescription> getPrescriptionsForPatient(User user) {
        Optional<Patient> patient = patientRepo.findByUser(user);
        return patient.map(p -> 
            prescriptionRepo.findByAppointmentPatientId(p.getPatient_id())
        ).orElse(Collections.emptyList());
    }
    
    public Optional<User> getCurrentUser(String username) {
        return userRepo.findByUsername(username);
    }

}
