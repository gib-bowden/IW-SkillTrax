import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { appRoutes } from './routes';

import { NavbarComponent } from './nav/navbar/navbar.component';
import { MaterialModule } from './material/material.module';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employees/employee-detail/employee-detail.component';
import { EmployeeListService } from './employees/services/employee-list.service';
import { ProfileComponent } from './profile/profile.component';
import { SkillListComponent } from './profile/skill-list/skill-list.component';
import { SkillService } from './employees/services/skill.service';
import { CertListComponent } from './profile/cert-list/cert-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EmployeeListComponent,
    EmployeeDetailComponent,
    ProfileComponent,
    SkillListComponent,
    CertListComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [EmployeeListService, SkillService],
  bootstrap: [AppComponent]
})
export class AppModule { }
