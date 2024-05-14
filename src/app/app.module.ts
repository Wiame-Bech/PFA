import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { AttributionSalaireComponent } from './attribution-salaire/attribution-salaire.component';
import { Window1Component } from './window1/window1.component';
import { Window2Component } from './window2/window2.component';
import { LoginComponent } from './login/login.component';
import { ProfComponent } from './prof/prof.component';
import { FiliereComponent } from './filiere/filiere.component';
import { Window3Component } from './window3/window3.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AddFiliereComponent } from './add-filiere/add-filiere.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatiereComponent } from './matiere/matiere.component';
import { HomeSalaireComponent } from './home-salaire/home-salaire.component';
import { ProfesseurComponent } from './professeur/professeur.component';
import { ComptabiliteComponent } from './comptabilite/comptabilite.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AttributionSalaireComponent,
    Window1Component,
    Window2Component,
    LoginComponent,
    ProfComponent,
    FiliereComponent,
    Window3Component,
    SidebarComponent,
    AddFiliereComponent,
    MatiereComponent,
    HomeSalaireComponent,
    ProfesseurComponent,
    ComptabiliteComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
