import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSalaireComponent } from './home-salaire.component';

describe('HomeSalaireComponent', () => {
  let component: HomeSalaireComponent;
  let fixture: ComponentFixture<HomeSalaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeSalaireComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeSalaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
