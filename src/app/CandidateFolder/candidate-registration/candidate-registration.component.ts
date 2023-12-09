import { Component, OnInit } from '@angular/core';
import{FormGroup, FormControl} from '@angular/forms';
import { Validators } from '@angular/forms';
import { platformBrowser } from '@angular/platform-browser';
import { CandReg } from './cand-reg';
import { RegisterCandidateService } from 'src/app/ServicesFolder/register-candidate.service';

@Component({
  selector: 'app-candidate-registration',
  templateUrl: './candidate-registration.component.html',
  styleUrls: ['./candidate-registration.component.css']
})
export class CandidateRegistrationComponent implements OnInit {

  alerts:boolean=false;

  candReg:CandReg = new CandReg();


  constructor(private registerCandidateService : RegisterCandidateService) { }

  ngOnInit(): void {
  }

  CandidateRegistration = new FormGroup({
    firstName : new FormControl(null,[Validators.required, Validators.pattern('^[A-Za-z]+[A-Za-z ]*$'), Validators.minLength(3)]),
    lastName  : new FormControl(null,[Validators.required, Validators.pattern('^[A-Za-z]+[A-Za-z ]*$')]),
    fatherName : new FormControl(null,[Validators.required, Validators.pattern('^[A-Za-z]+[A-Za-z ]*$')]),
    email : new FormControl(null,[Validators.required, Validators.email]),
    gender: new FormControl(Validators.required),
    skills: new FormControl(null,[Validators.required, Validators.minLength(5)]),
    location: new FormControl(null, Validators.required),
    willingToWork : new FormControl(null),
    higherEducation : new FormControl(null,[Validators.required]),
    workExperience  : new FormControl(null,[Validators.required]),
    dateOfBirth : new FormControl(null,[Validators.required]),
    describeYourself : new FormControl(null),
    userName  : new FormControl(null,[Validators.required, Validators.pattern('')]),
    password : new FormControl(null,[Validators.required,Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}$')]),
    termsAndConditions : new FormControl(true, Validators.requiredTrue)
  });

  


  get firstName(): FormControl {
    return this.CandidateRegistration.get('firstName') as FormControl;
  }

  get lastName(): FormControl {
    return this.CandidateRegistration.get('lastName') as FormControl;
  }

  get fatherName(): FormControl {
    return this.CandidateRegistration.get('fatherName') as FormControl;
  }

  get gender(): FormControl {
    return this.CandidateRegistration.get('gender') as FormControl;
  }

  get email(): FormControl {
    return this.CandidateRegistration.get('email') as FormControl;
  }
  
  get higherEducation(): FormControl {
    return this.CandidateRegistration.get('higherEducation') as FormControl;
  }

  get workExperience(): FormControl {
    return this.CandidateRegistration.get('workExperience') as FormControl;
  }

  get location(): FormControl {
    return this.CandidateRegistration.get('location') as FormControl;
  }

  get skills(): FormControl {
    return this.CandidateRegistration.get('skills') as FormControl;
  }

  get willingToWork(): FormControl {
    return this.CandidateRegistration.get('willingToWork') as FormControl;
  }

  get dateOfBirth(): FormControl {
    return this.CandidateRegistration.get('dateOfBirth') as FormControl;
  }

  get describeYourself(): FormControl {
    return this.CandidateRegistration.get('describeYourself') as FormControl;
  }

  get userName(): FormControl {
    return this.CandidateRegistration.get('userName') as FormControl;
  }

  get password(): FormControl {
    return this.CandidateRegistration.get('password') as FormControl;
  }


  get termsAndConditions(): FormControl {
    return this.CandidateRegistration.get('termsAndConditions') as FormControl;
  }
  



  RegisterCandidate() {
    console.log(this.candReg);
    console.table(this.candReg);
    this.registerCandidateService.registerCandiadate(this.candReg).subscribe(data=>
      {
        alert("Registration Success")
      },error=>alert("Registration Failed"));
    this.alerts=true;
    
    this.CandidateRegistration.reset();

  }

 

  

}
