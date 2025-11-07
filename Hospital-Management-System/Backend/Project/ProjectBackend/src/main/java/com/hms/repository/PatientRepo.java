package com.hms.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hms.model.Patient;
import com.hms.model.User;

import org.springframework.data.repository.query.Param;
import org.springframework.data.jpa.repository.Query;

@Repository
public interface PatientRepo extends JpaRepository<Patient, Long> {
	 Optional<Patient> findByUser(User user);
	
    @Query("SELECT DISTINCT p FROM Patient p JOIN p.appointments a WHERE a.doctor.doctorId = :doctorId")
    List<Patient> findByAppointmentsDoctorId(@Param("doctorId") Long doctorId);
}

