import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rec-applied-candidates',
  templateUrl: './rec-applied-candidates.component.html',
  styleUrls: ['./rec-applied-candidates.component.css']
})
export class RecAppliedCandidatesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  AppliedCandidates : any =[
    {
      Name: 'Siril Richard',
      Qualification:'B.Tech',
      Skills: 'React JS, Mongo DB, NodeJS',
      Experience: '2-5 Years',
      Location: 'Bangalore'
    },

    {
      Name: 'Abhishek Gupta',
      Qualification:'BCA',
      Skills: 'Angular, Oracle SQL, Spring Boot',
      Experience: '0-1 Years',
      Location: 'Delhi'
    },

    {
      Name: 'Karthik',
      Qualification:'BCA',
      Skills: 'React Js,MySQL, .NET',
      Experience: 'Fresher',
      Location: 'Andhra Pradesh'
    },

    {
      Name: 'Surjeet',
      Qualification:'MCA',
      Skills: 'XML,Flutter, Kotlin',
      Experience: 'Fresher',
      Location: 'Uttar Pradesh'
    },

    {
      Name: 'Siri Chandana',
      Qualification:'MCA',
      Skills: 'Angular,Oracle SQL, PHP',
      Experience: '2-5 Years',
      Location: 'Karnataka'
    }
  ]
}
