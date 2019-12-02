import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentsComponent } from './components/departments/departments.component';
import { DepartmentDetailsComponent } from './components/department-details/department-details.component';

const routes: Routes = [
  {path:'departments',component:DepartmentsComponent},
  {path:'department-details',component:DepartmentDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

export const MyComponents = [
  DepartmentsComponent,
  DepartmentDetailsComponent
]
