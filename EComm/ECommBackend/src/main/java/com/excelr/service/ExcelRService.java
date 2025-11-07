package com.excelr.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.excelr.model.Headphones;
import com.excelr.model.Laptops;
import com.excelr.model.Login;
import com.excelr.model.Mobiles;
import com.excelr.repo.ExcelRRepo;
import com.excelr.repo.HeadphonesRepo;
import com.excelr.repo.LaptopsRepo;
import com.excelr.repo.MobilesRepo;

@Service
public class ExcelRService {
	
	@Autowired
	private ExcelRRepo repo;
	@Autowired
	private LaptopsRepo laptopsrepo;
	@Autowired
	private MobilesRepo mobilesrepo;
	@Autowired
	private HeadphonesRepo headphonesrepo;
	
	public Login loginService(String username) {
		return repo.findByUsername(username);
	}
	
	public List<Laptops> getAllLaptops(){
		return laptopsrepo.findAll();
	}
	
	public List<Mobiles> getAllMobiles(){
		return mobilesrepo.findAll();
	}
	
	public List<Headphones> getAllHeadphones(){
		return headphonesrepo.findAll();
	}
	
	public Optional<Laptops> getlaptopById(int pid) {
		return laptopsrepo.findById(pid);
	}
	
	public Optional<Mobiles> getmobileById(int pid) {
		return mobilesrepo.findById(pid);
	}
	
	public Optional<Headphones> getheadphoneById(int pid) {
		return headphonesrepo.findById(pid);
	}
}
