import { Component, OnInit } from '@angular/core';
import { FormControlName, ReactiveFormsModule } from '@angular/forms';
import { FormGroup,Validators, FormControl } from '@angular/forms';
import { RecReg } from './rec-reg';
import { RecruiterRegisterService } from 'src/app/ServicesFolder/recruiter-registration.service';
@Component({
  selector: 'app-recruiter-registration',
  templateUrl: './recruiter-registration.component.html',
  styleUrls: ['./recruiter-registration.component.css']
})
export class RecruiterRegistrationComponent implements OnInit {

  alerts:boolean=false;

  recReg:RecReg = new RecReg();
  
  RecruiterRegistration = new FormGroup({
    companyName : new FormControl(null, [Validators.required] ),
    recruiterName : new FormControl(null, [Validators.required, Validators.pattern('^[A-Za-z]+[A-Za-z ]*$'), Validators.minLength(3)] ),
    email : new FormControl(null, [Validators.required, Validators.email] ),
    currentBranch : new FormControl(null, [Validators.required, Validators.minLength(3)] ),
    describeCompany : new FormControl(null, [Validators.required, Validators.minLength(30)]),
    companyWebsite : new FormControl(null,[Validators.required]),
    userName : new FormControl(null, [Validators.required, Validators.minLength(5)]),
    password : new FormControl(null,[Validators.required,Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}$')]),
    termsAndConditions : new FormControl(true, Validators.requiredTrue)
   
  });


 get companyName() : FormControl{
  return this.RecruiterRegistration.get('companyName') as FormControl;
 }

 get recruiterName() : FormControl{
  return this.RecruiterRegistration.get('recruiterName') as FormControl;
 }

 get email() : FormControl{
  return this.RecruiterRegistration.get('email') as FormControl;
 }

 get currentBranch() : FormControl{
  return this.RecruiterRegistration.get('currentBranch') as FormControl;
 }


 get describeCompany() : FormControl{
  return this.RecruiterRegistration.get('describeCompany') as FormControl;
 }

 get companyWebsite() : FormControl{
  return this.RecruiterRegistration.get('companyWebsite') as FormControl;
 }

 get userName() : FormControl{
  return this.RecruiterRegistration.get('userName') as FormControl;
 }

 get password() : FormControl{
  return this.RecruiterRegistration.get('password') as FormControl;
 }

 get termsAndConditions() : FormControl{
  return this.RecruiterRegistration.get('termsAndConditions') as FormControl;
 }


  ngOnInit(): void {
  }

  constructor( private recruiterRegistrationService : RecruiterRegisterService) { }


  RegisterCandidate() {
    console.log(this.recReg);
    console.table(this.recReg);
    this.recruiterRegistrationService.recruiterRegistration(this.recReg).subscribe(data=>
      {
        alert("Registration Success")
      },error=>alert("Registration Failed"));
    this.alerts=true;

    this.RecruiterRegistration.reset();
  }
}
