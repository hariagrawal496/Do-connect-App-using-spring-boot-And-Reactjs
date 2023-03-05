package com.hcl.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hcl.model.User;
import com.hcl.repository.UserRepository;

@Service
public class UserService {

	@Autowired
	UserRepository userRepository;
	
	@Autowired
	ChatService ChatService ;

	public String insertingUserData(User user) {

		userRepository.save(user);	
	
		return "data Inserting Successfully";
	}

	public List<User> getAllUserData() {

		List<User> list = userRepository.findAll();
		return list;
	}

	public String updateUserData(long id, User admin) {

		for (User adminData : userRepository.findAll()) {

			if (adminData.getId() == id) {

				admin.setId(id);
				userRepository.save(admin);
				return "Data is updated ";
			}
		}
		return " Id not found";
	}

	public String deleteUserData(long id) {

		for (User adminData : userRepository.findAll()) {

			if (adminData.getId() == id) {

				userRepository.deleteById(id);
				return "Data is deleted successfully ";
			}
		}
		return " Id not found";
	}

	public User getUserData(long id) {

		for (User adminData : userRepository.findAll()) {
			if (adminData.getId() == id) {
				return adminData;
			}
		}
		return null;
	}

}
