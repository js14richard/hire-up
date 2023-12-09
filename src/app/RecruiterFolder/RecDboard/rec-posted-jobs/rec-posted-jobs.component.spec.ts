import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecPostedJobsComponent } from './rec-posted-jobs.component';

describe('RecPostedJobsComponent', () => {
  let component: RecPostedJobsComponent;
  let fixture: ComponentFixture<RecPostedJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecPostedJobsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecPostedJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
