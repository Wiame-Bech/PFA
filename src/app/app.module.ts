import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { AttributionSalaireComponent } from './attribution-salaire/attribution-salaire.component';
import { GAbsenceComponent } from './g-absence/g-absence.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentServiceComponent } from './student-service/student-service.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AttributionSalaireComponent,
    GAbsenceComponent,
    StudentListComponent,
    StudentServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
