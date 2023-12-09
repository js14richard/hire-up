import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { DashboardNavigationComponent } from 'src/app/dashboard-navigation/dashboard-navigation.component';
import { LoginUserService } from 'src/app/ServicesFolder/login-user.service';
import { Login } from './login';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login:Login = new Login();

  constructor(private loginService:LoginUserService, private appComponent:AppComponent, private router:Router) { }

  ngOnInit(): void {
  }

  recLogin(){
    console.log(this.login)
    this.loginService.recruiterLogin(this.login).subscribe(
      data=> {
        alert("Login Successfull")
        this.appComponent.isLoggedIn=true;
        this.router.navigate(['app-component']);
      },error=>{
        console.log("exception occured")
        alert("Invalid credentials, please enter your valid credentials")
      })
  }


}