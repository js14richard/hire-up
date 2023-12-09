import { Component, OnInit } from '@angular/core';
import { RecruiterRegisterService } from 'src/app/ServicesFolder/recruiter-registration.service';
@Component({
  selector: 'app-rec-posted-jobs',
  templateUrl: './rec-posted-jobs.component.html',
  styleUrls: ['./rec-posted-jobs.component.css']
})
export class RecPostedJobsComponent implements OnInit {

  constructor(private recruiterRegistrationService : RecruiterRegisterService) { this.ShowJobs();}

  ngOnInit(): void {
  }

  PostedJobs:any = [
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

  DeleteJob(id:number){
    this.recruiterRegistrationService.deleteJob(id).subscribe(
      (resp)=> {console.log(resp);
        this.PostedJobs=resp;
      }
    );
  }

}