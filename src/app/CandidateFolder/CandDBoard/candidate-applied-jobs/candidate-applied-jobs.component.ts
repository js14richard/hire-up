import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-candidate-applied-jobs',
  templateUrl: './candidate-applied-jobs.component.html',
  styleUrls: ['./candidate-applied-jobs.component.css']
})
export class CandidateAppliedJobsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  AppliedJobs : any = [
    {
      JobRole : 'Software Developer',
      Qualification : 'BCA',
      CompanyName : 'HCL',
      Location : 'Chennai',
      Salary : '25000'
    },
        
    {
      JobRole : 'Graphic Designer',
      Qualification : 'Any Graduate',
      CompanyName : 'Freepik',
      Location : 'Kolkata',
      Salary : '25000'
    },
    
    {
      JobRole : 'Web Designer',
      Qualification :'Bsc/B.Tech',
      CompanyName : 'Google',
      Location : 'Chennai',
      Salary : '29000'
    },
    
    {
      JobRole : 'Visual Editor',
      Qualification : 'Any Graduate',
      CompanyName : 'Adobe',
      Location : 'Bangalore',
      Salary : '40000'
    },
  
    {
      JobRole : 'Software Developer',
      Qualification : 'BCA',
      CompanyName : 'HCL',
      Location : 'Chennai',
      Salary : '25000'
    },
  
    {
      JobRole : 'Web Developer',
      Qualification : 'B.Tech',
      CompanyName : 'TCS',
      Location : 'Noida',
      Salary : '27000'
    }
  ]
}
