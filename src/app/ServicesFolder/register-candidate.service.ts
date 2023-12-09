import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CandReg } from '../CandidateFolder/candidate-registration/cand-reg';

@Injectable({
  providedIn: 'root'
})
export class RegisterCandidateService {

  RegisterUrl="http://localhost:8081/RegisterCandidates"
  ShowCandidateUrl="http://localhost:8081/ShowAllCandidates"
  ShowByID="http://localhost:8081/SearchCandidate/"

  constructor(private httpClient: HttpClient) {

   }

  registerCandiadate(candReg: CandReg):Observable<Object>{
      return this.httpClient.post(`${this.RegisterUrl}`, candReg);
  }

  showAllCandidates(){
    return this.httpClient.get(`${this.ShowCandidateUrl}`);
  }

  showById(id:number){
    return this.httpClient.get(`${this.ShowByID}`+id);
  }
}

