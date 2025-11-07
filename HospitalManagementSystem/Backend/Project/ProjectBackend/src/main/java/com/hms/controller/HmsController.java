package com.hms.controller;


import java.time.LocalDate;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import com.hms.Util.JwtUtil;
import com.hms.model.*;
import com.hms.repository.*;
import com.hms.service.HmsService;


@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class HmsController {

    @Autowired
    private HmsService hmsService;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private DoctorRepo doctorRepo;

    @Autowired
    private PatientRepo patientRepo;
    
    @Autowired
    private AppointmentRepo appointmentRepo;

    @Autowired
    private PasswordEncoder passwordEncoder;
    
    private User getCurrentUser() {
        org.springframework.security.core.Authentication authentication = 
            SecurityContextHolder.getContext().getAuthentication();
        
        if (authentication == null || !(authentication.getPrincipal() instanceof User)) {
            throw new RuntimeException("User not authenticated");
        }
        
        return (User) authentication.getPrincipal();
    }


    // User Registration
    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody Map<String, String> registrationData) {
        try {
            if (userRepo.existsByUsername(registrationData.get("username"))) {
                return ResponseEntity.badRequest().body(Map.of("error", "Username already exists"));
            }

            User user = new User();
            user.setUsername(registrationData.get("username"));
            user.setPassword(passwordEncoder.encode(registrationData.get("password")));
            user.setRole(User.UserRole.valueOf(registrationData.get("role").toUpperCase()));

            User savedUser = hmsService.saveUser(user);

            if (user.getRole() == User.UserRole.ROLE_PATIENT) {
                Patient patient = new Patient();
                patient.setUser(savedUser);
                patient.setFirstName(registrationData.get("firstName"));
                patient.setLastName(registrationData.get("lastName"));
                patient.setContact(Long.parseLong(registrationData.get("contact")));
                patient.setAddress(registrationData.get("address"));
                patient.setDob(LocalDate.parse(registrationData.get("dob")));
                patient.setGender(registrationData.get("gender"));
                hmsService.savePatient(patient);
            } else if (user.getRole() == User.UserRole.ROLE_DOCTOR) {
                Doctor doctor = new Doctor();
                doctor.setUser(savedUser);
                doctor.setFirstName(registrationData.get("firstName"));
                doctor.setLastName(registrationData.get("lastName"));
                doctor.setSpecialization(registrationData.get("specialization"));
                hmsService.saveDoctor(doctor);
            }

            return ResponseEntity.status(HttpStatus.CREATED).body(Map.of("message", "User registered successfully"));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(Map.of("error", e.getMessage()));
        }
    }

    // User Login
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> loginData) {
        try {
            String username = loginData.get("username");
            String password = loginData.get("password");

            // Validate input
            if (username == null || password == null) {
                return ResponseEntity.badRequest().body("Username and password are required");
            }

            // Find user
            Optional<User> userOptional = userRepo.findByUsername(username);
            
            if (userOptional.isEmpty()) {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(Map.of("error", "User not found"));
            }

            User user = userOptional.get();

            // Verify password
            if (!passwordEncoder.matches(password, user.getPassword())) {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(Map.of("error", "Invalid credentials"));
            }

            // Generate token
            String token = jwtUtil.generateToken(username, user.getRole().name());

            return ResponseEntity.ok(Map.of(
                "token", token,
                "username", username,
                "role", user.getRole().name()
            ));

        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(Map.of("error", "Login process failed: " + e.getMessage()));
        }
    }

    // Admin Endpoints
    @GetMapping("/admin/users")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<List<User>> getAllUsersForAdmin() {
        return ResponseEntity.ok(hmsService.getUsers());
    }

    @GetMapping("/admin/patients")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<List<Patient>> getAllPatientsForAdmin() {
        return ResponseEntity.ok(hmsService.getPatients());
    }

    @GetMapping("/admin/doctors")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<List<Doctor>> getAllDoctorsForAdmin() {
        return ResponseEntity.ok(hmsService.getDoctors());
    }

    @GetMapping("/admin/appointments")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<List<Appointment>> getAllAppointmentsForAdmin() {
        return ResponseEntity.ok(hmsService.getAppointments());
    }

    // Doctor Endpoints
    @GetMapping("/doctor/appointments")
    @PreAuthorize("hasRole('DOCTOR')")
    public ResponseEntity<List<Appointment>> getDoctorAppointments() {
        User currentUser = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        List<Appointment> appointments = hmsService.getAppointmentsForDoctor(currentUser);
        return ResponseEntity.ok(appointments);
    }
    
    
    @PostMapping("/doctor/prescription/{appointmentId}")
    @PreAuthorize("hasRole('DOCTOR')")
    public ResponseEntity<?> createPrescription(
            @PathVariable Long appointmentId, 
            @RequestBody Prescription prescription) {

        // Get current doctor
        User currentUser = getCurrentUser();
        Doctor doctor = doctorRepo.findByUser(currentUser)
                .orElseThrow(() -> new RuntimeException("Doctor not found"));

        // Get appointment
        Appointment appointment = appointmentRepo.findById(appointmentId)
                .orElseThrow(() -> new RuntimeException("Appointment not found"));

        // Ensure appointment is completed before prescription
        if (!"Completed".equals(appointment.getStatus())) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(Map.of("error", "Appointment must be completed before writing a prescription."));
        }

        // Set prescription details
        prescription.setDoctor(doctor);
        prescription.setPatient(appointment.getPatient());
        prescription.setAppointment(appointment);

        // Set default start & end date
        if (prescription.getStartDate() == null) {
            prescription.setStartDate(LocalDate.now());
        }
        if (prescription.getEndDate() == null) {
            prescription.setEndDate(LocalDate.now().plusDays(7));
        }

        Prescription savedPrescription = hmsService.savePrescription(prescription);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedPrescription);
    }


//    @PostMapping("/doctor/prescription")
//    @PreAuthorize("hasRole('DOCTOR')")
//    public ResponseEntity<Prescription> createPrescription(@RequestBody Prescription prescription) {
//        User currentUser = getCurrentUser();
//        
//        Doctor currentDoctor = doctorRepo.findByUser(currentUser)
//            .orElseThrow(() -> new RuntimeException("Doctor not found"));
//        
//        prescription.setDoctor(currentDoctor);
//        
//        // Set default values if needed
//        if (prescription.getStartDate() == null) {
//            prescription.setStartDate(LocalDate.now());
//        }
//        if (prescription.getEndDate() == null) {
//            prescription.setEndDate(LocalDate.now().plusDays(7));
//        }
//        
//        Prescription savedPrescription = hmsService.savePrescription(prescription);
//        return ResponseEntity.status(HttpStatus.CREATED).body(savedPrescription);
//    }


    @PutMapping("/doctor/consultation/{appointmentId}")
    @PreAuthorize("hasRole('DOCTOR')")
    public ResponseEntity<?> updateConsultationRecord(
        @PathVariable Long appointmentId,
        @RequestBody Map<String, String> consultationDetails) {
        // Implement consultation record update logic
        return ResponseEntity.ok().build();
    }
    
    @PutMapping("/doctor/complete-appointment/{appointmentId}")
    @PreAuthorize("hasRole('DOCTOR')")
    public ResponseEntity<?> completeAppointment(@PathVariable Long appointmentId) {
        Appointment appointment = appointmentRepo.findById(appointmentId)
                .orElseThrow(() -> new RuntimeException("Appointment not found"));

        // Ensure appointment is not already completed
        if ("Completed".equals(appointment.getStatus())) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(Map.of("error", "Appointment is already completed."));
        }

        // Mark appointment as completed
        appointment.setStatus("Completed");
        appointmentRepo.save(appointment);
        
        return ResponseEntity.ok(Map.of("message", "Appointment marked as completed."));
    }


    // Patient Endpoints
    @PostMapping("/patient/appointment")
    @PreAuthorize("hasRole('PATIENT')")
    public ResponseEntity<?> bookAppointment(@RequestBody Appointment appointment) {
        // Get the currently logged-in user
        User currentUser = getCurrentUser();

        // Find the patient associated with this user
        Patient currentPatient = patientRepo.findByUser(currentUser)
            .orElseThrow(() -> new RuntimeException("Patient not found"));

        // Set the patient for the appointment
        appointment.setPatient(currentPatient);

        // Ensure an appointment time is provided
        if (appointment.getAppointmentTime() == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Appointment time is required");
        }

        // Ensure the doctorId is provided and valid
        if (appointment.getDoctor() == null || appointment.getDoctor().getDoctorId() == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Doctor ID is required");
        }

        // Validate doctor existence
        Doctor doctor = doctorRepo.findById(appointment.getDoctor().getDoctorId())
            .orElseThrow(() -> new RuntimeException("Doctor not found"));

        // Set the doctor in the appointment
        appointment.setDoctor(doctor);

        // Check if the doctor is available at the requested time
        boolean isDoctorAvailable = hmsService.isDoctorAvailable(doctor, appointment.getAppointmentTime());
        if (!isDoctorAvailable) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Doctor is not available at the selected time");
        }

        // Set appointment status
        appointment.setStatus("Scheduled");

        // Save the appointment
        Appointment savedAppointment = hmsService.saveAppointment(appointment);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedAppointment);
    }

    @GetMapping("/patient/prescriptions")
    @PreAuthorize("hasRole('PATIENT')")
    public ResponseEntity<List<Prescription>> getPatientPrescriptions() {
        User currentUser = getCurrentUser();
        Patient patient = patientRepo.findByUser(currentUser)
                .orElseThrow(() -> new RuntimeException("Patient not found"));
        
        List<Prescription> prescriptions = hmsService.getPrescriptionsForPatient(currentUser);
        return ResponseEntity.ok(prescriptions);
    }
    
    // Update Patient Details
    
//    @PutMapping("/{patientId}")
//    public Patient updatePatient(@PathVariable Long patientId, @RequestBody Patient updatedPatient) {
//        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
//        String username = authentication.getName(); // Extract username from token
//
//        return HmsService.updatePatient(patientId, updatedPatient, username);
//    }
    
    
//    @PutMapping("/patient/{patient_id}")
//    @PreAuthorize("hasRole('PATIENT') and #patient_id == principal.id")
//    public ResponseEntity<Patient> updatePatientDetails(@PathVariable Long patient_id, @RequestBody Patient patient) {
//        // First, validate if the current user is the one trying to edit the patient details
//        if (patient_id != patient.getPatient_id()) {
//            return ResponseEntity.status(403).build(); // Forbidden if patient is trying to edit another patient's details
//        }
//
//        // Update patient details
//        Patient updatedPatient = hmsService.updatePatientDetails(patient_id, patient);
//        return ResponseEntity.ok(updatedPatient);
//    }
    
//    //Delete patient details
//    @DeleteMapping("/patient/{id}")
//    @PreAuthorize("hasRole('ADMIN')") // Only admin can delete patients
//    public ResponseEntity<Void> deletePatient(@PathVariable Long patient_id) {
//        hmsService.deletePatient(patient_id);
//        return ResponseEntity.noContent().build(); // 204 No Content
//    }


    // Utility Endpoints
    @GetMapping("/users")
    public List<User> getUsers() {
        return hmsService.getUsers();
    }

    @GetMapping("/user/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id) {
        Optional<User> user = hmsService.getUserById(id);
        return user.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).build());
    }

    @GetMapping("/patients")
    public List<Patient> getPatients() {
        return hmsService.getPatients();
    }

    @GetMapping("/patient/{id}")
    public ResponseEntity<Patient> getPatientById(@PathVariable Long id) {
        Optional<Patient> patient = hmsService.getPatientById(id);
        return patient.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).build());
    }
    
    @GetMapping("/patient/profile")
    public ResponseEntity<?> getPatientProfile(
        @RequestHeader("Authorization") String token) {
        String username = jwtUtil.extractUsername(token.substring(7));
        Optional<User> user = userRepo.findByUsername(username);
        
        if (user.isPresent() && user.get().getRole() == User.UserRole.ROLE_PATIENT) {
            Optional<Patient> patient = patientRepo.findByUser(user.get());
            return patient.map(ResponseEntity::ok)
                          .orElse(ResponseEntity.notFound().build());
        }
        return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
    }

    @GetMapping("/doctors")
    public List<Doctor> getDoctors() {
        return hmsService.getDoctors();
    }

    @GetMapping("/doctor/{id}")
    public ResponseEntity<Doctor> getDoctorById(@PathVariable Long id) {
        Optional<Doctor> doctor = hmsService.getDoctorById(id);
        return doctor.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).build());
    }
    
    

    @PostMapping("/appointment")
    public ResponseEntity<Appointment> saveAppointment(@RequestBody Appointment appointment) {
        Appointment savedAppointment = hmsService.saveAppointment(appointment);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedAppointment);
    }

    @GetMapping("/appointments")
    public List<Appointment> getAppointments() {
        return hmsService.getAppointments();
    }
}
