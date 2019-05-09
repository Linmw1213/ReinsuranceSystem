import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { OperatorComponent } from './operator/operator.component';
import { AdminComponent } from './admin/admin.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPwdComponent } from './forgot-pwd/forgot-pwd.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'operatorIndex', component: OperatorComponent },
  { path: 'adminIndex', component: AdminComponent },
  { path: 'register', component: RegisterComponent },  
  { path: 'forgotPwd', component: ForgotPwdComponent },  
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
