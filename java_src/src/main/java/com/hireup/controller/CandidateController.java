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

import com.hireup.Repository.CandidateRepo;
import com.hireup.model.Candidates;


@RestController
@CrossOrigin(origins="http://localhost:4200/")
public class CandidateController {
	
	@Autowired
	private CandidateRepo repo;
	
	@PostMapping("/RegisterCandidates")
	public Candidates registerCandidate(@RequestBody Candidates candidates ) {
		
		System.out.println("Table is Creating");
		return repo.save(candidates);
	}
	
	@GetMapping("/ShowAllCandidates")
	private List<Candidates> ShowAllCandidates()   
	{  
	return repo.findAll();
	}
	
	@GetMapping("/SearchCandidate/{id}")
	private Optional<Candidates> searchCandidate(@PathVariable int id){
		return repo.findById(id);
	}
	
	
	@PutMapping("/UpdateCandidate")
	private Candidates updateCandidate(@RequestBody Candidates candidates) {
		return repo.save(candidates);
		
	}
	
	@DeleteMapping("/DeleteCandidate/{id}")
	private List<Candidates> deleteCandidate(@PathVariable int id){
		repo.deleteById(id);
		return repo.findAll();	
	}
	
	


	
}

