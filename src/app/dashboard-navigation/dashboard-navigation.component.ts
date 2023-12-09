import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { LoginUserService } from '../ServicesFolder/login-user.service';

@Component({
  selector: 'app-dashboard-navigation',
  templateUrl: './dashboard-navigation.component.html',
  styleUrls: ['./dashboard-navigation.component.css']
})
export class DashboardNavigationComponent implements OnInit {

  constructor(private appComponent:AppComponent, private loginservice:LoginUserService, private router:Router) { }

  ngOnInit(): void {
  }
  UserName:string = 'Siril Richard'

  userType:string= 'candidate';

  logout(){
    this.appComponent.isLoggedIn=false; 
  }

  
} 
