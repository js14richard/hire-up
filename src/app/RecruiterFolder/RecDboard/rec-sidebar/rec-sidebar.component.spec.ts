import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecSidebarComponent } from './rec-sidebar.component';

describe('RecSidebarComponent', () => {
  let component: RecSidebarComponent;
  let fixture: ComponentFixture<RecSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
