package com.hireup.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hireup.controller.PostJob;

@Repository
public interface PostJobRepo extends JpaRepository<PostJob, Integer>{
		
}
