import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rec-shortlisted-candidates',
  templateUrl: './rec-shortlisted-candidates.component.html',
  styleUrls: ['./rec-shortlisted-candidates.component.css']
})
export class RecShortlistedCandidatesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ShortlistedCandidates : any = [
    {
      Name: 'Siril Richard',
      Qualification:'B.Tech',
      Skills: 'React, No SQL, NodeJS',
      Experience: '2-5 Years',
      Location: 'Chennai'
    },

    {
      Name: 'Siri Chandana',
      Qualification:'MCA',
      Skills: 'Angular,Oracle SQL, PHP',
      Experience: '2-5 Years',
      Location: 'Karnataka'
    },
    
    {
      Name: 'Kashish Khan',
      Qualification:'M.Tech',
      Skills: 'React Native,Flutter, Java',
      Experience: 'Fresher',
      Location: 'Delhi'
    },

    {
      Name: 'Varshini',
      Qualification:'M.Tech',
      Skills: 'React Native,Flutter, Java',
      Experience: 'Fresher',
      Location: 'Delhi'
    },
  ];
}
