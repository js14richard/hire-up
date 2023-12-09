import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecShortlistedCandidatesComponent } from './rec-shortlisted-candidates.component';

describe('RecShortlistedCandidatesComponent', () => {
  let component: RecShortlistedCandidatesComponent;
  let fixture: ComponentFixture<RecShortlistedCandidatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecShortlistedCandidatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecShortlistedCandidatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
