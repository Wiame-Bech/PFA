import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AttributionSalaireComponent } from './attribution-salaire/attribution-salaire.component';
import { Window1Component } from './window1/window1.component';
import { LoginComponent } from './login/login.component';
import { ProfComponent } from './prof/prof.component';
import { FiliereComponent } from './filiere/filiere.component';
import { Window2Component } from './window2/window2.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AddFiliereComponent } from './add-filiere/add-filiere.component';
import { MatiereComponent } from './matiere/matiere.component';
import { HomeSalaireComponent } from './home-salaire/home-salaire.component';
import { ProfesseurComponent } from './professeur/professeur.component';
import { ComptabiliteComponent } from './comptabilite/comptabilite.component';
import { WelcomeComponent } from './welcome/welcome.component';



const routes: Routes = [
  { path: 'admin', component: AdminComponent },
  {path : 'attribution-salaire', component : AttributionSalaireComponent},
  {path : 'window1' , component : Window1Component},
  {path : 'login' , component : LoginComponent} ,
  {path : 'prof' , component : ProfComponent},
  {path : 'filiere' , component : FiliereComponent},
  {path : 'window2' , component : Window2Component},
  {path : 'sidebar' , component : SidebarComponent},
  {path : 'add-filiere' , component : AddFiliereComponent},
  {path : 'matiere' , component : MatiereComponent},
  {path : 'home-salaire' , component : HomeSalaireComponent},
  {path : 'professeur', component : ProfesseurComponent},
  {path : 'comptabilite' , component : ComptabiliteComponent},
  {path : 'welcome' , component : WelcomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
