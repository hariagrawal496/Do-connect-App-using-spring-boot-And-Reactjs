package com.hcl.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hcl.model.Admin;
import com.hcl.service.AdminService;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class AdminController {

	@Autowired
	AdminService adminService;

	//inserting the data
	@PostMapping("/admin")
	public String createUserData(@RequestBody Admin admin) {
		
		return adminService.insertingUserData(admin);
	}

	//fetching all the data
	@GetMapping("/admins")
	public List<Admin> getAlladminData() {
		
		return adminService.getAllAdminData();
	}
	
	
	//fetching particular data
	@GetMapping("/admin/{id}")
	public Admin getadminData(@PathVariable long id) {
		
		return adminService.getAdminData(id);
	}

	//updating the data
	@PutMapping("/admin/{id}")
	public String updateAdminData(@PathVariable long id, @RequestBody Admin admin) {
		
		return adminService.updateAdminData(id, admin);
	}

	//deleting the data
	@DeleteMapping("/admin/{id}")
	public String deleteadminData(@PathVariable long id) {
		
		return adminService.deleteAdminData(id);
	}

}
