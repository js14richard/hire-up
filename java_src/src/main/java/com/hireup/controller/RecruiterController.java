package com.hireup.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.hireup.Repository.PostJobRepo;
import com.hireup.Repository.RecruiterRepo;
import com.hireup.model.Recruiters;

@RestController
@CrossOrigin(origins="http://localhost:4200/")
public class RecruiterController {
	
	@Autowired
	private RecruiterRepo repo;
	
	@PostMapping("/RegisterRecruiters")
	private Recruiters registerCandidate(@RequestBody Recruiters recruiters ) {
		
		System.out.println("Table is Creating");
		return repo.save(recruiters);		
	}
	
	@GetMapping("/ShowRecruiters")
	private List<Recruiters> ShowAllRecruiters()   
	{  
	return repo.findAll();
	}
	
	@PutMapping("/UpdateRecruiter")
	private Recruiters updateRecruiter(@RequestBody Recruiters recruiters) {
		return repo.save(recruiters);
	}
		
	@PostMapping("/recLogin")
	@CrossOrigin(origins="http://localhost:4200")
	public Recruiters recLogin(@RequestBody Recruiters recruiters) throws Exception {
		System.out.println("Login Called");
		String tempUserName=recruiters.getUserName();
		String temppass=recruiters.getPassword();
		 Recruiters regiobj=null;
		if(tempUserName !=null && temppass !=null) {
			regiobj =repo.findById(tempUserName).get();
		}
		if(regiobj==null) {
			throw new Exception("Invald credentials");
		}
		return regiobj;
	}
	
	
	
	@Autowired
	private PostJobRepo jobRepo;
	
	
	@PostMapping("/postJob")
	private PostJob postJob(@RequestBody PostJob postJob) {
		return jobRepo.save(postJob);
		
	}
	
	@GetMapping("/ShowAllJobs")
	private List<PostJob> ShowAllJobs()   
	{  
	return jobRepo.findAll();
	}
	
	
	
	@DeleteMapping("/DeleteJob/{id}")
	private List<PostJob> deleteJob(@PathVariable int id){
		jobRepo.deleteById(id);
		return jobRepo.findAll();	
	}
	
	@GetMapping("/ShowJob/{id}")
	private Optional<PostJob> showJob(@PathVariable int id){
		return jobRepo.findById(id);
	}
	
	
	
	
}
