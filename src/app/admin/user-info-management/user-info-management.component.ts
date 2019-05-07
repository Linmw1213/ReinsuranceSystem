import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/VO/user';
import { UserInfoService } from 'src/app/service/user-info.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-info-management',
  templateUrl: './user-info-management.component.html',
  styleUrls: ['./user-info-management.component.css']
})
export class UserInfoManagementComponent implements OnInit {

  users: User[];
  modifyDialog = false;
  userForm: FormGroup;

  constructor(
    private userService: UserInfoService,
    private router: Router,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.getAll();
    this.createForm();
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

  getAll() {
    this.userService.getAll().subscribe(
      (data) => {
        this.users = data;
      }
    )
  }

  modifyBtnOnClick(selectedUser: User) {
    this.modifyDialog = true;
    this.userForm.get('userId').setValue(selectedUser.userId);
    this.userForm.get('role_name').setValue(selectedUser.role_name);
    this.userForm.get('username').setValue(selectedUser.username);
    this.userForm.get('email').setValue(selectedUser.email);
    this.userForm.get('phone').setValue(selectedUser.phone);
    this.userForm.get('address').setValue(selectedUser.address);
    this.userForm.get('sex').setValue(selectedUser.sex);

  }

  saveUpdate() {
    const user = {
      userId: this.userForm.get('userId').value,
      role_name: this.userForm.get('role_name').value,
      username: this.userForm.get('username').value,
      phone: this.userForm.get('phone').value,
      email: this.userForm.get('email').value,
      address: this.userForm.get('address').value,
      sex: this.userForm.get('sex').value
    }
    this.userService.updateInfo(user as User).subscribe(
      (data) => {
        if (data == 1) {
          this.getAll();
          console.log('success');
        } else {
          console.log('failured');
        }
      }
    );
    this.modifyDialog = false;
  }

  deleteBtnOnClick(selectedUser: User) {
    this.userService.deleteUser(selectedUser.userId).subscribe(
      (data) => {
        if (data === 1) {
          console.log('delete success');
        } else {
          console.log('can not delete');
        }
      }
    );
  }

}
