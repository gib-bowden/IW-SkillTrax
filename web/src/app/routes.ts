import { Routes } from '@angular/router'
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';


export const appRoutes:Routes = [
    {path: 'employees', component: EmployeeListComponent},
    {path: '', redirectTo: '/employees', pathMatch: 'full'},
   
]