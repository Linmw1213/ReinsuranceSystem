import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserInfoManagementComponent } from './user-info-management/user-info-management.component';
import { ParameterMaintenanceComponent } from './parameter-maintenance/parameter-maintenance.component';
import { AddUserComponent } from './user-info-management/add-user/add-user.component';
import { LoginLogComponent } from './parameter-maintenance/login-log/login-log.component';
import { ReinsClaimLogComponent } from './parameter-maintenance/reins-claim-log/reins-claim-log.component';
import { ReinsTypeLogComponent } from './parameter-maintenance/reins-type-log/reins-type-log.component';
import { ContractLogComponent } from './parameter-maintenance/contract-log/contract-log.component';
import { CompanyLogComponent } from './parameter-maintenance/company-log/company-log.component';

const routes: Routes = [
  // 用户管理
  { path: 'UserInfoManagement', component: UserInfoManagementComponent },
  { path: 'addUser', component: AddUserComponent },

  // 查看日志
  { path: 'paramMaintenance', component: ParameterMaintenanceComponent },
  { path: 'loginLog', component: LoginLogComponent },
  { path: 'companyLog', component: CompanyLogComponent },
  { path: 'contractLog', component: ContractLogComponent },
  { path: 'reinsTypeLog', component: ReinsTypeLogComponent },
  { path: 'reinsClaimLog', component: ReinsClaimLogComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
