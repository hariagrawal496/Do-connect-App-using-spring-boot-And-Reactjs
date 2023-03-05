package com.hcl.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hcl.model.Answer;
import com.hcl.repository.AnswerRepository;


@Service
public class AnswerService {

	@Autowired
	AnswerRepository questionrRepository;

	public String insertingUserData(Answer question) {

		questionrRepository.save(question);
		return "data Inserting Successfully";
	}

	public List<Answer> getAllUserData() {

		List<Answer> list = questionrRepository.findAll();
		return list;
	}

	public String updateUserData(long id, Answer question) {

		for (Answer adminData : questionrRepository.findAll()) {

			if (adminData.getId() == id) {

				question.setId(id);
				questionrRepository.save(question);
				return "Data is updated ";
			}
		}
		return " Id not found";
	}

	public String deleteUserData(long id) {

		for (Answer adminData : questionrRepository.findAll()) {

			if (adminData.getId() == id) {

				questionrRepository.deleteById(id);
				return "Data is deleted successfully ";
			}
		}
		return " Id not found";
	}

	public Answer getUserData(long id) {

		for (Answer adminData : questionrRepository.findAll()) {
			if (adminData.getId() == id) {
				return adminData;
			}
		}
		return null;
	}

}
