import { Component, OnInit } from '@angular/core';
import { RegisterCandidateService } from 'src/app/ServicesFolder/register-candidate.service';
import { RecruiterRegisterService } from 'src/app/ServicesFolder/recruiter-registration.service';

@Component({
  selector: 'app-rec-matched-candidates',
  templateUrl: './rec-matched-candidates.component.html',
  styleUrls: ['./rec-matched-candidates.component.css']
})
export class RecMatchedCandidatesComponent implements OnInit {

  constructor(private candidateRegistrationService:RegisterCandidateService, private recruiterRegistrationService : RecruiterRegisterService ) {this.DisplayCandidates(); this.ShowJobs();}

  ngOnInit(): void {
  }

  RegisteredCandidates : any = [
    {

    }
  ];

  PostedJobs:any= [
    {

    }
  ];

  DisplayCandidates() {
    this.candidateRegistrationService.showAllCandidates().subscribe(
      (resp)=> {console.log(resp);
        this.RegisteredCandidates=resp;
      }, 
      (err)=>{console.log(err);
      }
    );
  }

  ShowJobs() {
    this.recruiterRegistrationService.showPostedJob().subscribe(
      (resp)=> {console.log(resp);
        this.PostedJobs=resp;
      }, 
      (err)=>{console.log(err);
      }
    );
  }

}
