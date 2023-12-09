import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecViewResumeComponent } from './rec-view-resume.component';

describe('RecViewResumeComponent', () => {
  let component: RecViewResumeComponent;
  let fixture: ComponentFixture<RecViewResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecViewResumeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecViewResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
