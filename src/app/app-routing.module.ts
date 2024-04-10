import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { StudentListComponent } from './student-list/student-list.component';
import { AttributionSalaireComponent } from './attribution-salaire/attribution-salaire.component';
import { GAbsenceComponent } from './g-absence/g-absence.component';

const routes: Routes = [
  { path: 'admin', component: AdminComponent },
  { path: 'student-list', component: StudentListComponent },
  {path : 'attribution-salaire', component : AttributionSalaireComponent},
  {path : 'g-absence', component : GAbsenceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
