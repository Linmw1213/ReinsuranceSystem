import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { UserInfoService } from 'src/app/service/user-info.service';
import { User } from 'src/app/VO/user';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent implements OnInit {

  updataPwdForm: FormGroup;

  constructor(private fb: FormBuilder, private service: UserInfoService) { }

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

  confirm() {
    this.service.getSelfInfo(sessionStorage.getItem('currentUserId')).subscribe(
      (data) => {
        console.log(data.password);
        const newPwd = this.updataPwdForm.get('newPassword').value;
        const repeatPwd = this.updataPwdForm.get('repeatPwd').value;
        const oldPwd = this.updataPwdForm.get('oldPassword').value;
        if (repeatPwd === newPwd && data.password == oldPwd) {
          // console.log('修改成功');
          this.submit();
        } else if (newPwd !== repeatPwd) {
          console.log('两次输入的密码不一致');
        } else {
          console.log('旧密码不正确');
        }
      }
    )
  }

  submit() {
    console.log('修改密码：'+ sessionStorage.getItem('currentUserId'));
    const user = {
      userId: sessionStorage.getItem('currentUserId'),
      password: this.updataPwdForm.get('newPassword').value
    }
    this.service.updatePwd(user as User).subscribe(
      (data) => {
        if (data == 1) {
          console.log('修改成功');
        } else {
          console.log('修改失败');
        }
      }
    );
  }

}
