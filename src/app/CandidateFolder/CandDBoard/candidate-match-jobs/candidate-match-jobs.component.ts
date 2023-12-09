import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-candidate-match-jobs',
  templateUrl: './candidate-match-jobs.component.html',
  styleUrls: ['./candidate-match-jobs.component.css']
})
export class CandidateMatchJobsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

   candidateQualification:any='BCA' ;
   candidateLocation:any='Chennai';

  PostedJobs : any = [
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
    }
  
    ];
}
