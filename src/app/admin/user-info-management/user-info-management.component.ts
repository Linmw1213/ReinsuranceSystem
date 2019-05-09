import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/VO/user';
import { UserInfoService } from 'src/app/service/user-info.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';
import { UserRole } from 'src/app/VO/userRole';

@Component({
  selector: 'app-user-info-management',
  templateUrl: './user-info-management.component.html',
  styleUrls: ['./user-info-management.component.css']
})
export class UserInfoManagementComponent implements OnInit {

  users: User[];
  modifyDialog = false;
  userForm: FormGroup;
  roles = [];
  findUser: User;
  displayRs = false;
  notFound = false;
  found = false;
  role = '';
  role_name = '';
  deleteConfirmDialog=false;
  deleteUser: User;

  constructor(
    private userService: UserInfoService,
    private router: Router,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.getAll();
    this.createForm();
    this.setRole();
  }

  setRole() {
    this.roles = [
      { label: '系统管理员', value: 1 },
      { label: '系统业务员', value: 2 }
    ]
  }

  createForm() {
    this.userForm = this.fb.group({
      id: ['', Validators.required],
      userId: new FormControl({ value: '', disabled: true }),
      username: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      sex: ['', Validators.required],
      address: ['', Validators.required],
      role_name: ['', Validators.required],
    });
  }

  getUserById() {
    this.displayRs = true;
    const id = this.userForm.get('id').value;
    this.userService.getSelfInfo(id).subscribe(
      (data) => {
        if (data !== null) {
          this.found = true;
          this.notFound = false;

          this.userService.queryUserRoleById(data.userId).subscribe(
            (role) => {
              this.userForm.get('role_name').setValue(role.role_name);
            }
          );
          this.userForm.get('userId').setValue(data.userId);
          this.userForm.get('username').setValue(data.username);
          this.userForm.get('phone').setValue(data.phone);
          this.userForm.get('email').setValue(data.email);
          this.userForm.get('sex').setValue(data.sex);
          this.userForm.get('address').setValue(data.address);
        } else {
          this.notFound = true;
          this.found = false;
        }
      }
    );
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

    const userRole = {
      uid: this.userForm.get('userId').value,
      rid: this.userForm.get('role_name').value,
    }

    this.userService.updateInfo(user as User).subscribe(
      (data) => {
        if (data == 1) {
          this.userService.updateUserRole(userRole as UserRole).subscribe(
            (role) => {
              if(role == 1){
                console.log('add role success')
                this.getAll();
              }
            }
          );
        } else {
          console.log('failured');
        }
      }
    );

    this.modifyDialog = false;
  }

  deleteBtnOnClick(selectedUser: User) {
    this.deleteConfirmDialog = true;
    this.deleteUser = selectedUser;
  }

  confirmDeletion() {
    this.userService.deleteUser( this.deleteUser.userId).subscribe(
      (data) => {
        if (data == 1) {
          this.getAll();
          this.deleteConfirmDialog = false;
          console.log('delete success');
        } else {
          console.log('can not delete');
        }
      }
    );
    this.userService.deleteRole( this.deleteUser.userId).subscribe();
  }

  addUser(){
    this.router.navigateByUrl('addUser'); 
  }
}
