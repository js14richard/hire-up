import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardNavigationComponent } from './dashboard-navigation.component';

describe('DashboardNavigationComponent', () => {
  let component: DashboardNavigationComponent;
  let fixture: ComponentFixture<DashboardNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardNavigationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
