import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserInfoManagementComponent } from './user-info-management/user-info-management.component';
import { ParameterMaintenanceComponent } from './parameter-maintenance/parameter-maintenance.component';

const routes: Routes = [
  { path: 'UserInfoManagement', component: UserInfoManagementComponent },
  { path: 'paramMaintenance', component: ParameterMaintenanceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
