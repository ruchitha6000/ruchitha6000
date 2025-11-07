package com.excelr.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.excelr.model.Login;

@Repository
public interface ExcelRRepo extends JpaRepository<Login, Integer> {
	Login findByUsername(String username);
}
