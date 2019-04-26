import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReinsCompanyManagementComponent } from './reins-company-management/reins-company-management.component';
import { ReinsContractManagementComponent } from './reins-contract-management/reins-contract-management.component';
import { ReinsTypesManagemententComponent } from './reins-types-managementent/reins-types-managementent.component';
import { AddReinsCompanyComponent } from './reins-company-management/add-reins-company/add-reins-company.component';
import { ReinsCalculationComponent } from './reins-calculation/reins-calculation.component';
import { AddContractComponent } from './reins-contract-management/add-contract/add-contract.component';
import { ModifyContractComponent } from './reins-contract-management/modify-contract/modify-contract.component';
import { ReinsClaimManagementComponent } from './reins-claim-management/reins-claim-management.component';
import { SystemManagementeComponent } from './system-managemente/system-managemente.component';

const routes: Routes = [
  // 公司信息管理
  { path: 'ReinsCompanyManagement', component: ReinsCompanyManagementComponent },
  { path: 'addCompanyMsg', component: AddReinsCompanyComponent },

  // 合同信息管理
  { path: 'ReinsContractManagement', component: ReinsContractManagementComponent },
  { path: 'addContract', component: AddContractComponent },  
  { path: 'modifyContract', component: ModifyContractComponent },  

  // 险种信息管理
  { path: 'ReinsTypesManagement', component: ReinsTypesManagemententComponent },

  // 再保计算
  { path: 'ReinsCalculation', component: ReinsCalculationComponent },

  // 理赔管理
  { path: 'ReinsClaimManagement', component: ReinsClaimManagementComponent },

  // 系统设置
  { path: 'SystemManagement', component: SystemManagementeComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class OperatorRoutingModule { }