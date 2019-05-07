import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { UserInfoService } from 'src/app/service/user-info.service';
import { User } from 'src/app/VO/user';

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
      email: ['', Validators.required],
      phone: ['', Validators.required],
      sex: ['', Validators.required],
      address: ['', Validators.required],
      role_name: new FormControl({ value: '', disabled: true })
    });
  }

  getUserInfo() {
    this.userService.getSelfInfo(sessionStorage.getItem('currentUserId')).subscribe(
      (data) => {
        console.log(data.phone);
        this.userForm.get('userId').setValue(data.userId);
        this.userForm.get('role_name').setValue(sessionStorage.getItem('currentUserRole'));
        this.userForm.get('username').setValue(data.username);
        this.userForm.get('email').setValue(data.email);
        this.userForm.get('phone').setValue(data.phone);
        this.userForm.get('address').setValue(data.address);
        this.userForm.get('sex').setValue(data.sex);
      }
    );
  }

  saveUpdate() {
    const user = {
      userId: this.userForm.get('userId').value,
      username: this.userForm.get('username').value,
      phone: this.userForm.get('phone').value,
      email: this.userForm.get('email').value,
      address: this.userForm.get('address').value,
      sex: this.userForm.get('sex').value
    }
    this.userService.updateInfo(user as User).subscribe(
      (data) => {
        if (data == 1) {
          this.getUserInfo();
          console.log('success');
        } else {
          console.log('failured');
        }
      }
    )
  }

}
