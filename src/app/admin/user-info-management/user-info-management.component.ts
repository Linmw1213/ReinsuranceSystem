import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/VO/user';
import { UserInfoService } from 'src/app/service/user-info.service';

@Component({
  selector: 'app-user-info-management',
  templateUrl: './user-info-management.component.html',
  styleUrls: ['./user-info-management.component.css']
})
export class UserInfoManagementComponent implements OnInit {

  users: User[];
  constructor(private userService: UserInfoService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.userService.getAll().subscribe(
      (data) => {
        this.users = data;
      }
    )
  }

}
