import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

/**native routings */
import { AppRoutingModule } from './app-routing.module';
import { OperatorRoutingModule } from './operator/operator-routing.module';

/**primeng modules*/
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

/**native components */
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
import { AdminRoutingModule } from './admin/admin-routing.module';
import { MenuLeftComponent } from './admin/menu-left/menu-left.component';
import { UserInfoManagementComponent } from './admin/user-info-management/user-info-management.component';
import { AddContractComponent } from './operator/reins-contract-management/add-contract/add-contract.component';

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
    AddContractComponent
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
    AdminRoutingModule,
    TooltipModule,
    CalendarModule,
    DynamicDialogModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
