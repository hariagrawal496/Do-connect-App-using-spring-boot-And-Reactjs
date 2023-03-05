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

import com.hcl.model.UserQuestion;
import com.hcl.service.UserQuestionService;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class UserQuestionController {

	@Autowired
	UserQuestionService uquestionService;

	//inserting the data
	@PostMapping("/userquestion")
	public String createUserData(@RequestBody UserQuestion userquestion) {
		
		return uquestionService.insertingUserData(userquestion);
	}

	//fetching all the data
	@GetMapping("/userquestions")
	public List<UserQuestion> getAllUserData() {
		
		return uquestionService.getAllUserData();
	}

	//fetching particular data
	@GetMapping("/userquestion/{id}")
	public UserQuestion	 getAllUserData(@PathVariable long id) {
		
		return uquestionService.getUserData(id);
	}
	
	//updating the data
	@PutMapping("/userquestion/{id}")
	public String updateUserData(@PathVariable long id, @RequestBody UserQuestion userquestion) {
		
		return uquestionService.updateUserData(id, userquestion);
	}

	//deleting the data
	@DeleteMapping("/userquestion/{id}")
	public String deleteUserData(@PathVariable long id) {
		
		return uquestionService.deleteUserData(id);
	}

}
