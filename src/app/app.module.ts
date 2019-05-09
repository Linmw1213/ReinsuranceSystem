import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

/** native routings */
import { AppRoutingModule } from './app-routing.module';
import { OperatorRoutingModule } from './operator/operator-routing.module';
import { AdminRoutingModule } from './admin/admin-routing.module';

/** primeng modules */
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { RadioButtonModule } from 'primeng/radiobutton';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { CardModule } from 'primeng/card';
import { DataViewModule } from 'primeng/dataview';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { DropdownModule } from 'primeng/dropdown';
import { PanelModule } from 'primeng/panel';
import { ChartModule } from 'primeng/chart';
import { TooltipModule } from 'primeng/tooltip';
import { CalendarModule } from 'primeng/calendar';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TabViewModule } from 'primeng/tabview';
import { StepsModule } from 'primeng/steps';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { TabMenuModule } from 'primeng/tabmenu';


/** native components */
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { OperatorComponent } from './operator/operator.component';
import { ReinsCompanyManagementComponent } from './operator/reins-company-management/reins-company-management.component';
import { ReinsContractManagementComponent } from './operator/reins-contract-management/reins-contract-management.component';
import { ReinsTypesManagemententComponent } from './operator/reins-types-managementent/reins-types-managementent.component';
import { NavLeftComponent } from './operator/layout/nav-left/nav-left.component';
import { AddReinsCompanyComponent } from './operator/reins-company-management/add-reins-company/add-reins-company.component';
import { ReinsCalculationComponent } from './operator/reins-calculation/reins-calculation.component';
import { AdminComponent } from './admin/admin.component';
import { MenuLeftComponent } from './admin/menu-left/menu-left.component';
import { UserInfoManagementComponent } from './admin/user-info-management/user-info-management.component';
import { AddContractComponent } from './operator/reins-contract-management/add-contract/add-contract.component';
import { ModifyContractComponent } from './operator/reins-contract-management/modify-contract/modify-contract.component';
import { ReinsClaimManagementComponent } from './operator/reins-claim-management/reins-claim-management.component';
import { SystemManagementComponent } from './operator/system-management/system-management.component';
import { UserInfoComponent } from './operator/system-management/user-info/user-info.component';
import { UpdatePasswordComponent } from './operator/system-management/update-password/update-password.component';
import { ParameterMaintenanceComponent } from './admin/parameter-maintenance/parameter-maintenance.component';
import { RegisterComponent } from './register/register.component';
import { AddUserComponent } from './admin/user-info-management/add-user/add-user.component';
import { LoginLogComponent } from './admin/parameter-maintenance/login-log/login-log.component';
import { CompanyLogComponent } from './admin/parameter-maintenance/company-log/company-log.component';
import { ContractLogComponent } from './admin/parameter-maintenance/contract-log/contract-log.component';
import { ReinsTypeLogComponent } from './admin/parameter-maintenance/reins-type-log/reins-type-log.component';
import { ReinsClaimLogComponent } from './admin/parameter-maintenance/reins-claim-log/reins-claim-log.component';
import { AddClaimComponent } from './operator/reins-claim-management/add-claim/add-claim.component';
import { ForgotPwdComponent } from './forgot-pwd/forgot-pwd.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    OperatorComponent,
    ReinsCompanyManagementComponent,
    ReinsContractManagementComponent,
    ReinsTypesManagemententComponent,
    NavLeftComponent,
    AddReinsCompanyComponent,
    ReinsCalculationComponent,
    AdminComponent,
    MenuLeftComponent,
    UserInfoManagementComponent,
    AddContractComponent,
    ModifyContractComponent,
    ReinsClaimManagementComponent,
    SystemManagementComponent,
    UserInfoComponent,
    UpdatePasswordComponent,
    ParameterMaintenanceComponent,
    RegisterComponent,
    AddUserComponent,
    LoginLogComponent,
    CompanyLogComponent,
    ContractLogComponent,
    ReinsTypeLogComponent,
    ReinsClaimLogComponent,
    AddClaimComponent,
    ForgotPwdComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,

    /**routing modules */
    AppRoutingModule,
    OperatorRoutingModule,
    AdminRoutingModule,

    /**primeng modules */
    InputTextModule,
    PasswordModule,
    ButtonModule,
    RadioButtonModule,
    MenuModule,
    TableModule,
    DialogModule,
    CardModule,
    DataViewModule,
    MessagesModule,
    MessageModule,
    DropdownModule,
    PanelModule,
    ChartModule,
    TooltipModule,
    CalendarModule,
    DynamicDialogModule,
    InputTextareaModule,
    TabViewModule,
    StepsModule,
    ConfirmDialogModule,
    TabMenuModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
