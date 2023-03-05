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

import com.hcl.model.Question;
import com.hcl.service.QuestionService;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class QuestionController {

	@Autowired
	QuestionService questionService;

	//inserting the data
	@PostMapping("/question")
	public String createUserData(@RequestBody Question question) {
		
		return questionService.insertingUserData(question);
	}

	//fetching all the data
	@GetMapping("/questions")
	public List<Question> getAllUserData() {
		
		return questionService.getAllUserData();
	}

	//fetching particular data
	@GetMapping("/question/{id}")
	public Question getAllUserData(@PathVariable long id) {
		
		return questionService.getUserData(id);
	}
	
	//updating the data
	@PutMapping("/question/{id}")
	public String updateUserData(@PathVariable long id, @RequestBody Question question) {
		
		return questionService.updateUserData(id, question);
	}

	//deleting the data
	@DeleteMapping("/question/{id}")
	public String deleteUserData(@PathVariable long id) {
		
		return questionService.deleteUserData(id);
	}

}
