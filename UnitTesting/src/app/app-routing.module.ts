import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { EmpdetailComponent } from './empdetail/empdetail.component';

const routes: Routes = [
  { path: 'employee', component: EmployeeComponent},
  { path: 'empdetail', component: EmpdetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
