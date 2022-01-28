import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DepartmentsListComponent} from './departments-list/departments-list.component'
import {EmployeeListComponent} from './employee-list/employee-list.component'

const routes: Routes = [
  { path: 'departments', component: DepartmentsListComponent},
  { path: 'employees', component: EmployeeListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DepartmentsListComponent, EmployeeListComponent]
