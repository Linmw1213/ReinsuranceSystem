import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { SelectItem } from 'primeng/api';

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

  constructor(private fb: FormBuilder, private router: Router) {
    this.cities = [
      { label: 'Select City', value: '1'},
    ];
   }

  ngOnInit() {
    this.createForm();
    // this.check();
  }

  createForm() {
    this.loginform = this.fb.group({
      'username': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)])),
      'role': new FormControl(''),
    });
    // console.log('测试')
  }

  btnOnClick() {
    if (this.operator && this.loginform.valid) {
      this.router.navigateByUrl('operatorIndex');
    } else {
      this.errorDialog = true;
    }
  }

  // check(){
  //   const numReg = /^\d{6}$/;
  //   console.log(this.username )
  //   if(this.username){
  //   }else if(numReg.test(this.username)){
  //     console.log('账号格式不正确')
  //   }else{
  //     console.log('正确')
  //   }
  // }
}
