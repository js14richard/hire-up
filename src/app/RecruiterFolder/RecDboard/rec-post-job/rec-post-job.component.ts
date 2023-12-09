import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PostJob } from './post-job';
import { PostJobService } from 'src/app/ServicesFolder/post-job.service';
@Component({
  selector: 'app-rec-post-job',
  templateUrl: './rec-post-job.component.html',
  styleUrls: ['./rec-post-job.component.css']
})
export class RecPostJobComponent implements OnInit {

  postNewJob:PostJob = new PostJob();

  postJob = new FormGroup({
    jobRole : new FormControl(null, [Validators.required]),
    noOfVacancies : new FormControl(null, [Validators.required, Validators.pattern('^[0-9]*$')]),
    companyName : new FormControl(null, [Validators.required]),
    higherEducationQualification : new FormControl(null, Validators.required),
    workExperience : new FormControl(null, Validators.required),
    skills : new FormControl(null, [Validators.required, Validators.minLength(5)]),
    location : new FormControl(null, [Validators.required]),
    gender: new FormControl(null, [Validators.required]),
    natureOfJob : new FormControl(null, [Validators.required]),
    wfhAllowed : new FormControl(null, [Validators.required]),
    salaryRange : new FormControl(null, [Validators.required]),
    department : new FormControl(null, [Validators.required]),
    workTiming : new FormControl(null, [Validators.required]),
    jobDescription : new FormControl(null, [Validators.required, Validators.minLength(30)]),
    termsAndConditions : new FormControl(null, Validators.requiredTrue)
  });
  

  get jobRole(): FormControl {
    return this.postJob.get('jobRole') as FormControl;
  }

  get noOfVacancies(): FormControl {
    return this.postJob.get('noOfVacancies') as FormControl;
  }

  get higherEducationQualification(): FormControl {
    return this.postJob.get('higherEducationQualification') as FormControl;
  }

  get workExperience(): FormControl {
    return this.postJob.get('workExperience') as FormControl;
  }
  get skills(): FormControl {
    return this.postJob.get('skills') as FormControl;
  }

  get location(): FormControl {
    return this.postJob.get('location') as FormControl;
  }

  get gender(): FormControl {
    return this.postJob.get('gender') as FormControl;
  }

  get naturOfJob(): FormControl {
    return this.postJob.get('natureOfJob') as FormControl;
  }

  get wfhAllowed(): FormControl {
    return this.postJob.get('wfhAllowed') as FormControl;
  }

  get department(): FormControl {
    return this.postJob.get('department') as FormControl;
  }

  get salaryRange(): FormControl {
    return this.postJob.get('salaryRange') as FormControl;
  }

  get workTiming(): FormControl {
    return this.postJob.get('workTiming') as FormControl;
  }

  get jobDescription(): FormControl {
    return this.postJob.get('jobDescription') as FormControl;
  }
  
  get termsAndConditions(): FormControl {
    return this.postJob.get('termsAndConditions') as FormControl;
  }

  get companyName():FormControl{
    return this.postJob.get('companyName') as FormControl
  }



  constructor(private postJobService : PostJobService) { }

  ngOnInit(): void {

    }

     
  PostingJob(){
    console.log(this.postNewJob);
    console.table(this.postNewJob);
    this.postJobService.postJobs(this.postNewJob).subscribe(data=>
      {
        alert("Job Posted Successfully")
      },error=>alert("Job Posting Failed"));
} 

}
