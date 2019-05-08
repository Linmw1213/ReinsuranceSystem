import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Company } from '../VO/company';
import { UserInfoService } from '../service/user-info.service';
import { User } from '../VO/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginform: FormGroup;
  operator: boolean = true;
  errorDialog: boolean = false;
  company: Company;
  name: any;
  login_register: boolean = true;
  constructor(
    private fb: FormBuilder,
    private loginService: UserInfoService,
    private router: Router) { }

  ngOnInit() {
    this.createForm();

  }

  createForm() {
    this.loginform = this.fb.group({
      userId: new FormControl('', Validators.compose(
        [
          Validators.required,
          // Validators.minLength(6), 
          Validators.maxLength(20),
          Validators.pattern('^[0-9a-zA-Z_]{1,}$')
        ]
      )),
      password: new FormControl('', Validators.compose(
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(20),
          Validators.pattern('^[0-9a-zA-Z_]{1,}$')
        ]
      )),
      'role': new FormControl(''),
    });

  }

  btnOnClick() {
    const user = {
      userId: this.loginform.get('userId').value,
      password: this.loginform.get('password').value,
    }
    if (this.loginform.valid) {
      this.loginService.login(user as User).subscribe(
        (data) => {
          if (data !== null) {
            const role_name = data.role_name;
            sessionStorage.setItem('currentUserId', this.loginform.get('userId').value);
            sessionStorage.setItem('currentUserRole', role_name);

            if (role_name === '系统管理员') {
              this.router.navigateByUrl('adminIndex');
            } else {
              this.router.navigateByUrl('operatorIndex');
            }
            
          } else {
            console.log('登录失败');
          }
        }
      )
    }
  }

  Login_Register(Type) {
    if (Type == true) {
      this.login_register = true;
    } else {
      this.login_register = false;
    }
    console.log(Type)
  }

  
}
