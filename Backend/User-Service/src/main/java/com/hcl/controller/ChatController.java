package com.hcl.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hcl.model.Chat;
import com.hcl.service.ChatService;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class ChatController {

	@Autowired
	ChatService chatService;

	//inserting the data
	@PostMapping("/chat")
	public void createUserData(@RequestBody Chat chat) {
		
		 chatService.insertingUserData(chat);
	}

	//fetching all the data
	@GetMapping("/chats")
	public List<Chat> getAllUserData() {
		
		return chatService.getAllUserData();
	}


}
