import { Component, OnInit } from '@angular/core';
import { Student } from '../models/student.model'; 

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'] // Ajoutez le fichier CSS ici
})
export class StudentListComponent implements OnInit {
  // Déclarez une propriété pour stocker la liste des étudiants
  students: Student[] = [];

  constructor() { }

  ngOnInit(): void {
    //pour Déclarez une propriété afin de la  stocker dans  la liste des étudiants
    this.students = [
      { firstName: 'wiame', lastName: 'bech', email: 'wi@gmail.com' },
      { firstName: 'dodi', lastName: 'rah', email: 'wi@gmail.com' } ,
      { firstName: 'roumaissae', lastName: 'bib', email: 'wi@gmail.com' }
      //exemple d'une liste des etudiants
    ];
  }
}
