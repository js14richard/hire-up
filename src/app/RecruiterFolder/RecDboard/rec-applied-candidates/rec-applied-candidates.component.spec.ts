import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecAppliedCandidatesComponent } from './rec-applied-candidates.component';

describe('RecAppliedCandidatesComponent', () => {
  let component: RecAppliedCandidatesComponent;
  let fixture: ComponentFixture<RecAppliedCandidatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecAppliedCandidatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecAppliedCandidatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
