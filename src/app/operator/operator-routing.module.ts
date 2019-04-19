import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReinsCompanyManagementComponent } from './reins-company-management/reins-company-management.component';
import { ReinsContractManagementComponent } from './reins-contract-management/reins-contract-management.component';
import { ReinsTypesManagemententComponent } from './reins-types-managementent/reins-types-managementent.component';
import { AddReinsCompanyComponent } from './reins-company-management/add-reins-company/add-reins-company.component';
import { ReinsCalculationComponent } from './reins-calculation/reins-calculation.component';

const routes: Routes = [
  // 公司信息管理
  { path: 'ReinsCompanyManagement', component: ReinsCompanyManagementComponent },
  { path: 'addCompanyMsg', component: AddReinsCompanyComponent },

  // 合同信息管理
  { path: 'ReinsContractManagement', component: ReinsContractManagementComponent },
  
  // 险种信息管理
  { path: 'ReinsTypesManagement', component: ReinsTypesManagemententComponent },

  // 再保计算
  { path: 'ReinsCalculation', component: ReinsCalculationComponent },

  // 账单管理

  // 系统设置
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class OperatorRoutingModule { }