import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserInfoManagementComponent } from './user-info-management/user-info-management.component';

const routes: Routes = [
  { path: 'UserInfoManagement', component: UserInfoManagementComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
