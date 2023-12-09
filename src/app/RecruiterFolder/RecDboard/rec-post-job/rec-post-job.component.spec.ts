import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecPostJobComponent } from './rec-post-job.component';

describe('RecPostJobComponent', () => {
  let component: RecPostJobComponent;
  let fixture: ComponentFixture<RecPostJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecPostJobComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecPostJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
