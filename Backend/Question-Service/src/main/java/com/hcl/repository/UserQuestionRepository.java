package com.hcl.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hcl.model.UserQuestion;

@Repository
public interface UserQuestionRepository extends JpaRepository<UserQuestion, Long> {

}
