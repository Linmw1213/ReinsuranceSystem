import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { UserInfoService } from 'src/app/service/user-info.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  userForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private userService: UserInfoService) { }

  ngOnInit() {
    this.createForm();
    this.getUserInfo();
  }

  createForm() {
    this.userForm = this.fb.group({
      userId: new FormControl({ value: '', disabled: true }),
      username: ['', Validators.required],
      userEmail: ['', Validators.required],
      userPhone: ['', Validators.required],
    });
  }

  getUserInfo() {
    this.userService.getSelfInfo(sessionStorage.getItem('currentUserId')).subscribe(
      (data) => {
        console.log(data.username);
        this.userForm.get('userId').setValue(data.userId);
        this.userForm.get('username').setValue(data.username);
        this.userForm.get('userEmail').setValue(data.username);
        this.userForm.get('userPhone').setValue(data.username);
      }
    );
  }

}
