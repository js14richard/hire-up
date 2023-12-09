import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-candidate-sidebar',
  templateUrl: './candidate-sidebar.component.html',
  styleUrls: ['./candidate-sidebar.component.css']
})
export class CandidateSidebarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.router.navigate(['rec-dashboard'])
  }

}
