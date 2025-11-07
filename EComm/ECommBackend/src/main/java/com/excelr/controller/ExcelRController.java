package com.excelr.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.excelr.model.Headphones;
import com.excelr.model.Laptops;
import com.excelr.model.Mobiles;
import com.excelr.model.User;
import com.excelr.repo.UserRepository;
import com.excelr.service.ExcelRService;
import com.excelr.util.JwtUtil;

@RestController
@CrossOrigin("*")
public class ExcelRController {

	@Autowired
	private ExcelRService service;
	@Autowired
	private JwtUtil jwtUtil;
	@Autowired
	private UserRepository userRepository;

	
	@PostMapping("/login")
	public ResponseEntity<Map<String, String>> login(@RequestBody Map<String, String> loginData){
		String username = loginData.get("username");
		String password = loginData.get("password");
		
		Optional<User> user = userRepository.findByUsername(username);
		
		if (user.isPresent() && user.get().getPassword().equals(password)) {
			Map<String, String> response = new HashMap<>();
			
			String token = jwtUtil.generateToken(username);
			response.put("token", token);
			response.put("login", "success");
			
			return ResponseEntity.ok(response);
		}else {
			Map<String, String> response = new HashMap<>();
			response.put("login", "fail");
			return ResponseEntity.status(401).body(response);
		}
	}
	
	
	@GetMapping("/user/laptops")
	public List<Laptops> getAllLaptops(){
		return service.getAllLaptops();
	}
	@GetMapping("/user/mobiles")
	public List<Mobiles> getAllMobiles(){
		return service.getAllMobiles();
	}
	@GetMapping("/user/headphones")
	public List<Headphones> getAllHeadphones(){
		return service.getAllHeadphones();
	}
	@GetMapping("/user/laptops/{pid}")
	public Optional<Laptops> getlaptopById(@PathVariable int pid) {
		return service.getlaptopById(pid);
	}
	@GetMapping("/user/mobiles/{pid}")
	public Optional<Mobiles> getmobileById(@PathVariable int pid) {
		return service.getmobileById(pid);
	}
	@GetMapping("/user/headphones/{pid}")
	public Optional<Headphones> getheadphoneById(@PathVariable int pid) {
		return service.getheadphoneById(pid);
	}
	
    
	@PostMapping("/logout")
	public ResponseEntity<?> logout(){
		SecurityContextHolder.clearContext();
		return ResponseEntity.ok("logout success");
	}
}

