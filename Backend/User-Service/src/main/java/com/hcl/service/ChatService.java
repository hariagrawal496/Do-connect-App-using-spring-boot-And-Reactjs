package com.hcl.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hcl.model.Chat;
import com.hcl.repository.ChatRepository;

@Service
public class ChatService {

	@Autowired
	ChatRepository chatRepository;
	
	
	public void insertingUserData(Chat chat) {

		chatRepository.save(chat);

	}

	public List<Chat> getAllUserData(){

		List<Chat> list = chatRepository.findAll();
		return list;
	}

	

}
