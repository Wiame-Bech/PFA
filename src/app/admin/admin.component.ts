import { Component , ViewChild } from '@angular/core';
import { Window1Component } from '../window1/window1.component';
import { ProfComponent } from '../prof/prof.component';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

  showAddProfessor: boolean = false;
  showModifyProfessor: boolean = false;
  showDeleteProfessor: boolean = false;
  showAddFiliere: boolean = false;
  showModifyFiliere: boolean = false;
  showDeleteFiliere: boolean = false;
  showAddMatiere: boolean = false;
  showModifyMatiere: boolean = false;
  showDeleteMatiere: boolean = false;
  showAddAuto: boolean = false;
  showModifyAuto: boolean = false;
  showDeleteAuto: boolean = false;

  @ViewChild(Window1Component) window1Component: Window1Component | undefined;
  @ViewChild(ProfComponent) ProfComponent: Window1Component | undefined;


  constructor(){}






}

