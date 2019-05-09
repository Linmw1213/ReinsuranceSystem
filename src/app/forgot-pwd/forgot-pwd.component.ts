import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-forgot-pwd',
  templateUrl: './forgot-pwd.component.html',
  styleUrls: ['./forgot-pwd.component.css']
})
export class ForgotPwdComponent implements OnInit {

  updatePwdForm: FormGroup;
  displayUsername = true;
  displayReset = false;
  items: MenuItem[];
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.updatePwdForm = this.fb.group({
      oldPassword: ['', Validators.compose([
        Validators.required, Validators.minLength(6), Validators.maxLength(20)
      ])],
      newPassword: ['', Validators.compose([
        Validators.required, Validators.minLength(6), Validators.maxLength(20)
      ])],
      repeatPwd: ['', Validators.compose([
        Validators.required, Validators.minLength(6), Validators.maxLength(20)
      ])],
    });
  }

  nextBtnOnClick() {
    this.displayUsername = false;
    this.displayReset = true;
  }

  setItems() {
    this.items = [
      { label: '确认身份信息' },
      { label: '重置密码' },
      { label: '' }
    ];
  }

}
