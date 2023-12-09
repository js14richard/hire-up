import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecMatchedCandidatesComponent } from './rec-matched-candidates.component';

describe('RecMatchedCandidatesComponent', () => {
  let component: RecMatchedCandidatesComponent;
  let fixture: ComponentFixture<RecMatchedCandidatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecMatchedCandidatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecMatchedCandidatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
