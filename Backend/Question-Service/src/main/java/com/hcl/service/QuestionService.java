package com.hcl.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hcl.model.Question;
import com.hcl.repository.QuestionRepository;


@Service
public class QuestionService {

	@Autowired
	QuestionRepository questionrRepository;

	public String insertingUserData(Question question) {

		questionrRepository.save(question);
		return "data Inserting Successfully";
	}

	public List<Question> getAllUserData() {

		List<Question> list = questionrRepository.findAll();
		return list;
	}

	public String updateUserData(long id, Question question) {

		for (Question adminData : questionrRepository.findAll()) {

			if (adminData.getId() == id) {

				question.setId(id);
				questionrRepository.save(question);
				return "Data is updated ";
			}
		}
		return " Id not found";
	}

	public String deleteUserData(long id) {

		for (Question adminData : questionrRepository.findAll()) {

			if (adminData.getId() == id) {

				questionrRepository.deleteById(id);
				return "Data is deleted successfully ";
			}
		}
		return " Id not found";
	}

	public Question getUserData(long id) {

		for (Question adminData : questionrRepository.findAll()) {
			if (adminData.getId() == id) {
				return adminData;
			}
		}
		return null;
	}

}
