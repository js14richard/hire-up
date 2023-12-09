import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DBoardLayoutComponent } from './dboard-layout.component';

describe('DBoardLayoutComponent', () => {
  let component: DBoardLayoutComponent;
  let fixture: ComponentFixture<DBoardLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DBoardLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DBoardLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
