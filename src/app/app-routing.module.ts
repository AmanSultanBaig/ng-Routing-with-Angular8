import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentsComponent } from './components/departments/departments.component';
import { DepartmentDetailsComponent } from './components/department-details/department-details.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'departments', pathMatch: 'full' },
  { path: 'departments', component: DepartmentsComponent },
  { path: 'department-details', component: DepartmentDetailsComponent },
  // wild card routing 
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

export const MyComponents = [
  DepartmentsComponent,
  DepartmentDetailsComponent,
  NotFoundComponent
]
