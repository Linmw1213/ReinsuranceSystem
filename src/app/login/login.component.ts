import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CompanyService } from '../service/company.service';
import { TestService } from '../service/test.service';
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
  constructor(
    private fb: FormBuilder,
    private loginService: UserInfoService,
    private service: TestService,
    private router: Router) { }

  ngOnInit() {
    this.createForm();

  }

  createForm() {
    this.loginform = this.fb.group({
      'userId': new FormControl('', Validators.compose([Validators.required, Validators.maxLength(20)])),
      'password': new FormControl('', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(20)])),
      'role': new FormControl(''),
    });

  }

  btnOnClick() {

    const user: User = {
      userId: this.loginform.get('userId').value,
      password: this.loginform.get('password').value,
      username: '',
      phone: '',
      email: '',
      name: ''
    }
    this.loginService.login(user).subscribe(
      (data) => {
        this.name = data.name;
        if (this.loginform.valid) {
          sessionStorage.setItem('username', this.loginform.get('userId').value)
          if (this.name === 'operator') {
            this.router.navigateByUrl('operatorIndex');
          } else if (this.name === 'admin') {
            this.router.navigateByUrl('adminIndex');
          } else {
            console.log('error username');
          }
        }
      }
    )

    // this.service.test('1001').subscribe(
    //   (data) => {
    //     this.company = data;
    //     console.log(data.currency);
    //     console.log(this.company.bankName);
    //   }
    // );

  }

}
