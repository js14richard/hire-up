import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecSearchCandidatesComponent } from './rec-search-candidates.component';

describe('RecSearchCandidatesComponent', () => {
  let component: RecSearchCandidatesComponent;
  let fixture: ComponentFixture<RecSearchCandidatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecSearchCandidatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecSearchCandidatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
