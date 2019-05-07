import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { User } from '../VO/user';
import { UserInfoService } from '../service/user-info.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private userService: UserInfoService
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      sex: ['', Validators.required],
      address: ['', Validators.required],
    });
  }

  confirm() {
    const user = {
      username: this.registerForm.get('username').value,
      phone: this.registerForm.get('phone').value,
      email: this.registerForm.get('email').value,
      address: this.registerForm.get('address').value,
      sex: this.registerForm.get('sex').value
    }
    this.userService.register(user as User).subscribe(
      (data) => {
        if (data == 1) {
          console.log('success');
        } else {
          console.log('failured');
        }
      }
    )
  }

}
