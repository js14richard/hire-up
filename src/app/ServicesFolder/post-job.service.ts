import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostJob } from '../RecruiterFolder/RecDboard/rec-post-job/post-job';
@Injectable({
  providedIn: 'root'
})
export class PostJobService {

  baseUrl = "http://localhost:8081/postJob";

  constructor(private httpClient : HttpClient) { }
   
  postJobs(postNewJob : PostJob) : Observable<Object>  {
     console.log(postNewJob);
     return this.httpClient.post(`${this.baseUrl}`, postNewJob);

  } 
}
