package com.hcl.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hcl.model.Mail;
import com.hcl.model.Question;
import com.hcl.model.UserQuestion;
import com.hcl.repository.MailService;
import com.hcl.repository.QuestionRepository;
import com.hcl.repository.UserQuestionRepository;


@Service
public class UserQuestionService {

	@Autowired
	UserQuestionRepository uquestionRepository;
	
	@Autowired
	QuestionRepository questionRepository;
	
	@Autowired
	 private MailService mailService;

	public String insertingUserData(UserQuestion userquestion) {
	
        userquestion.setStatus("pending");
        UserQuestion newQuestion = uquestionRepository.save(userquestion);
        
        // ---------------- mail concept ----------
        try {
        	
        	if(newQuestion!=null) {
    			Mail mail = new Mail();
    	        mail.setMailFrom("amaragrawal30011984@gmail.com");
    	        mail.setMailTo("hariagrawal.496@gmail.com");
    	        mail.setMailSubject("New User Posted A question");
    	        mail.setMailContent(" It is posted a new question !");
    	        mailService.sendEmail(mail);	
    	        
    	        System.out.println("Mail sended ...!");
    		}
			
		} catch (Exception e) {
			System.out.println("Some server issued...");
		}
        
        
        //-----------------------------------
		
		return "Data Added Successfully";
	}

	
	public List<UserQuestion> getAllUserData() {

		List<UserQuestion> list = uquestionRepository.findAll();
		return list;
	}
	

	public String updateUserData(long id, UserQuestion question) {

		for (UserQuestion adminData : uquestionRepository.findAll()) {

			if ((adminData.getId() == id) && question.getStatus().equalsIgnoreCase("success") ) {
				
				question.setId(id);
				question.setStatus(question.getStatus());
				uquestionRepository.save(question);
				
				Question ques = new Question();
				ques.setQuestion(question.getQuestion());
				questionRepository.save(ques);
				
				return "Data is updated successfully ";
			}
		}
		return " Id is not found";
	}
	

	public String deleteUserData(long id) {

		for (UserQuestion adminData : uquestionRepository.findAll()) {

			if (adminData.getId() == id) {
				uquestionRepository.deleteById(id);
				return "Data is deleted successfully ";
			}
		}
		return " Id is not found";
	}

	public UserQuestion getUserData(long id) {

		for (UserQuestion adminData : uquestionRepository.findAll()) {
			if (adminData.getId() == id) {
				return adminData;
			}
		}
		return null;
	}

}
