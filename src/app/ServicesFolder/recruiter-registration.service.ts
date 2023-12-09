import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RecReg } from '../RecruiterFolder/recruiter-registration/rec-reg';

@Injectable({
  providedIn: 'root'
})
export class RecruiterRegisterService {
   
  regisrterUrl = "http://localhost:8081/RegisterRecruiters";
  showPostedUrl = "http://localhost:8081/ShowAllJobs";
  deleteJobUrl = "http://localhost:8081/DeleteJob/";
  updateRecruiterUrl = "http://localhost:8081/UpdateRecruiter";
  showJobById = "http://localhost:8081/ShowJob/";

  constructor(private httpClient : HttpClient) { }
   
  recruiterRegistration(recReg : RecReg) : Observable<Object>  {
     console.log(recReg);
     return this.httpClient.post(`${this.regisrterUrl}`, recReg);
  } 

  updateRecruiter(recruiters:any){
    return this.httpClient.put(`${this.updateRecruiterUrl}`,recruiters);
  }

  showPostedJob(){

    return this.httpClient.get(`${this.showPostedUrl}`);
  }

  deleteJob(id:number){
    return this.httpClient.delete(`${this.deleteJobUrl}`+id);
  }

  viewJobById(id:number){
    return this.httpClient.get(`${this.showJobById}`+id);
  }

}
