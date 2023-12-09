import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateMatchJobsComponent } from './candidate-match-jobs.component';

describe('CandidateMatchJobsComponent', () => {
  let component: CandidateMatchJobsComponent;
  let fixture: ComponentFixture<CandidateMatchJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidateMatchJobsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidateMatchJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
