import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributionSalaireComponent } from './attribution-salaire.component';

describe('AttributionSalaireComponent', () => {
  let component: AttributionSalaireComponent;
  let fixture: ComponentFixture<AttributionSalaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AttributionSalaireComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AttributionSalaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
