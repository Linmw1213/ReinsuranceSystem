import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { UserInfoService } from 'src/app/service/user-info.service';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent implements OnInit {

  updataPwdForm: FormGroup;

  constructor(private fb: FormBuilder, private updatePwdService: UserInfoService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.updataPwdForm = this.fb.group({
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

}
