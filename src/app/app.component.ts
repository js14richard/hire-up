import { Component } from '@angular/core';
import { LoginComponent } from './StaticPages/login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'HireUp';

  isLoggedIn:boolean=false;
  
}
