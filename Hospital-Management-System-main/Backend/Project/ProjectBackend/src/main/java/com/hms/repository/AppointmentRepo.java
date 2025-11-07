package com.hms.repository;


import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hms.model.Appointment;
import com.hms.model.Doctor;

@Repository
public interface AppointmentRepo extends JpaRepository<Appointment, Long> {
    List<Appointment> findByDoctorDoctorId(Long doctorId);
    List<Appointment> findByDoctorAndAppointmentTime(Doctor doctor, LocalDateTime appointmentTime);

}