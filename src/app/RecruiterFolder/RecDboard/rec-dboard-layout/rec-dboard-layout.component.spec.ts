import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecDboardLayoutComponent } from './rec-dboard-layout.component';

describe('RecDboardLayoutComponent', () => {
  let component: RecDboardLayoutComponent;
  let fixture: ComponentFixture<RecDboardLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecDboardLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecDboardLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
