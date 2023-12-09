import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateShortListedJobsComponent } from './candidate-short-listed-jobs.component';

describe('CandidateShortListedJobsComponent', () => {
  let component: CandidateShortListedJobsComponent;
  let fixture: ComponentFixture<CandidateShortListedJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidateShortListedJobsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidateShortListedJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
