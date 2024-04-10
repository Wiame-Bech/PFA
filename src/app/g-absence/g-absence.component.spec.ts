import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GAbsenceComponent } from './g-absence.component';

describe('GAbsenceComponent', () => {
  let component: GAbsenceComponent;
  let fixture: ComponentFixture<GAbsenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GAbsenceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GAbsenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
