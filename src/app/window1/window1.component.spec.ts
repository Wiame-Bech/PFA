import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Window1Component } from './window1.component';

describe('Window1Component', () => {
  let component: Window1Component;
  let fixture: ComponentFixture<Window1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Window1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Window1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
