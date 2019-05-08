import { Component, OnInit } from '@angular/core';
import { UserInfoService } from 'src/app/service/user-info.service';
import { User } from 'src/app/VO/user';
import { LogService } from 'src/app/service/log.service';

@Component({
  selector: 'app-login-log',
  templateUrl: './login-log.component.html',
  styleUrls: ['./login-log.component.css']
})
export class LoginLogComponent implements OnInit {

  users: User[];
  cols = [];
  constructor(private logService: LogService) { }

  ngOnInit() {
    this.getAll();
    this.setCols();
  }

  getAll() {
    this.logService.getUserLoginLog().subscribe(
      (data) => {
        this.users = data;
      }
    )
  }

  setCols() {
    this.cols = [
      { field: 'userId', header: '用户编号' },
      { field: 'username', header: '用户名' },
      { field: 'role_name', header: '拥有角色' },
      { field: 'phone', header: '联系电话' },
      { field: 'loginTime', header: '上次登录时间' }
    ];
  }

  delete(user: any) {
    this.logService.deleteUserLoginLog(user.userId).subscribe(
      (data) => {
        if (data == 1) {
          this.users = this.users.filter(u => u !== user);
          console.log('删除成功');
        } else {
          console.log('删除失败');
        }
      }
    )
  }
}
