import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Window1Component } from '../window1/window1.component';

import { ProfComponent } from './prof.component';

describe('ProfComponent', () => {
  let component: ProfComponent;
  let fixture: ComponentFixture<ProfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


});
