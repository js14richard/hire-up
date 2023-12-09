import { Component, OnInit } from '@angular/core';
import { RegisterCandidateService } from 'src/app/ServicesFolder/register-candidate.service';
@Component({
  selector: 'app-rec-search-candidates',
  templateUrl: './rec-search-candidates.component.html',
  styleUrls: ['./rec-search-candidates.component.css']
})
export class RecSearchCandidatesComponent implements OnInit {

  constructor(private candidateRegistrationService:RegisterCandidateService) {  }

  ngOnInit(): void {
    this.DisplayCandidates();
  }

  RegisteredCandidates : any = [
    {
     
    }
  ];

  viewCandidate : any=[
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

  ViewResume(id:number){
    this.candidateRegistrationService.showById(id).subscribe(
      (resp)=> {console.log(resp);
        this.viewCandidate=resp;
      }
    );
  }

}
