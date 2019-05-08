import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UserInfoService } from 'src/app/service/user-info.service';
import { User } from 'src/app/VO/user';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  userForm: FormGroup;
  roles = [];
  uid: any;

  constructor(
    private fb: FormBuilder,
    private userService: UserInfoService
  ) { }

  ngOnInit() {
    this.createForm();
    this.setRole();
  }

  createForm() {
    this.userForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      sex: ['', Validators.required],
      address: ['', Validators.required],
      role_name: ['', Validators.required],
    });
  }

  setRole() {
    this.roles = [
      { label: '系统管理员', value: 1 },
      { label: '系统业务员', value: 2 }
    ]
  }

  submit() {

    const user = {
      username: this.userForm.get('username').value,
      phone: this.userForm.get('phone').value,
      email: this.userForm.get('email').value,
      address: this.userForm.get('address').value,
      sex: this.userForm.get('sex').value
    }

    this.userService.addUser(user as User).subscribe(
      (data) => {
        if (data == 1) {
          this.userService.getLastUserId().subscribe(
            (data) => {
              this.uid = data.userId;
              const role = {
                uid: this.uid,
                rid: this.userForm.get('role_name').value,
              }
              this.userService.addRole(role).subscribe(
                (role) => {
                  if (role == 1) {
                    console.log('add success')
                  } else {
                    console.log('add failured')
                  }
                }
              )
            }
          );
        } else {
          console.log('add failured')
        }
      }
    );


  }

}
