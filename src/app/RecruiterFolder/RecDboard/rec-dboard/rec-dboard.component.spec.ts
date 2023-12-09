import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecDboardComponent } from './rec-dboard.component';

describe('RecDboardComponent', () => {
  let component: RecDboardComponent;
  let fixture: ComponentFixture<RecDboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecDboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecDboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
