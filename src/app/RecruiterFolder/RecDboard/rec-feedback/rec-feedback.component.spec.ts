import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecFeedbackComponent } from './rec-feedback.component';

describe('RecFeedbackComponent', () => {
  let component: RecFeedbackComponent;
  let fixture: ComponentFixture<RecFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecFeedbackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
