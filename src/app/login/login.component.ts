import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { SelectItem } from 'primeng/api';
import { CompanyService } from '../service/company.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginform: FormGroup;
  operator: boolean = true;
  errorDialog: boolean = false;
  cities: SelectItem[];
  // username : '0';

  constructor(private fb: FormBuilder, private service: CompanyService, private router: Router) {
    this.cities = [
      { label: 'Select City', value: '1' },
    ];
  }

  ngOnInit() {
    this.createForm();
    // this.check();
  }

  createForm() {
    this.loginform = this.fb.group({
      'username': new FormControl('', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(20)])),
      'password': new FormControl('', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(20)])),
      'role': new FormControl(''),
    });
    // console.log('测试')
  }

  btnOnClick() {
    let username = this.loginform.get('username').value
    if (this.operator && this.loginform.valid) {
      if (username === 'zhangsan'){
        this.router.navigateByUrl('operatorIndex');
      } else if(username === 'lisi1213') {
        this.router.navigateByUrl('adminIndex');
      } else {
        console.log('error username');
      }
    } 
  }

}
