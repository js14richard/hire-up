import { Component, OnInit } from '@angular/core';
import { RecruiterRegisterService } from 'src/app/ServicesFolder/recruiter-registration.service';

@Component({
  selector: 'app-candidate-search-jobs',
  templateUrl: './candidate-search-jobs.component.html',
  styleUrls: ['./candidate-search-jobs.component.css']
})
export class CandidateSearchJobsComponent implements OnInit {

  constructor(private recruiterRegistrationService : RecruiterRegisterService) { this.ShowJobs();}

  dtOptions:DataTables.Settings = {};
  ngOnInit(): void {
    this.dtOptions={
      pagingType:'full_numbers',
      pageLength:5,
      lengthMenu: [5,10,15],
      processing:true
    }
  }

  PostedJobs : any = [
  {

  }
  ];

  viewJob : any = [
    {
  
    }
    ];


  ShowJobs() {
    this.recruiterRegistrationService.showPostedJob().subscribe(
      (resp)=> {console.log(resp);
        this.PostedJobs=resp;
      }, 
      (err)=>{console.log(err);
      }
    );
  }

  ViewJob(id:number){
    this.recruiterRegistrationService.viewJobById(id).subscribe(
      (resp)=> {console.log(resp);
        this.viewJob=resp;
      }
    );
  }


}
