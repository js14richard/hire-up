package com.hireup.controller;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="PostedJobs")
public class PostJob {
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE )
	private int jobId;
	private String jobRole;
	private int noOfVacancies;
	private String companyName;
	private String workExperience;
	private String higherEducationQualification;
	private String skills;
	private String location;
	private String gender;
	private String natureOfJob;
	private String wfhAllowed;
	private String salaryRange;
	private String department;
	private String workTiming;
	private String jobDescription;
	
	public int getJobId() {
		return jobId;
	}
	public void setJobId(int jobId) {
		this.jobId = jobId;
	}
	public String getJobRole() {
		return jobRole;
	}
	public void setJobRole(String jobRole) {
		this.jobRole = jobRole;
	}
	public int getNoOfVacancies() {
		return noOfVacancies;
	}
	public void setNoOfVacancies(int noOfVacancies) {
		this.noOfVacancies = noOfVacancies;
	}
	public String getCompanyName() {
		return companyName;
	}
	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}
		
	public String getHigherEducationQualification() {
		return higherEducationQualification;
	}
	public void setHigherEducationQualification(String higherEducationQualification) {
		this.higherEducationQualification = higherEducationQualification;
	}
	public String getWorkExperience() {
		return workExperience;
	}
	public void setWorkExperience(String workExperience) {
		this.workExperience = workExperience;
	}
	public String getSkills() {
		return skills;
	}
	public void setSkills(String skills) {
		this.skills = skills;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getNatureOfJob() {
		return natureOfJob;
	}
	public void setNatureOfJob(String natureOfJob) {
		this.natureOfJob = natureOfJob;
	}
	public String getWfhAllowed() {
		return wfhAllowed;
	}
	public void setWfhAllowed(String wfhAllowed) {
		this.wfhAllowed = wfhAllowed;
	}
	public String getSalaryRange() {
		return salaryRange;
	}
	public void setSalaryRange(String salaryRange) {
		this.salaryRange = salaryRange;
	}
	public String getDepartment() {
		return department;
	}
	public void setDepartment(String department) {
		this.department = department;
	}
	public String getWorkTiming() {
		return workTiming;
	}
	public void setWorkTiming(String workTiming) {
		this.workTiming = workTiming;
	}
	public String getJobDescription() {
		return jobDescription;
	}
	public void setJobDescription(String jobDescription) {
		this.jobDescription = jobDescription;
	}
	
	
}
