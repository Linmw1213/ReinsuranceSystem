import { Component, OnInit } from '@angular/core';
import { User } from '../VO/user';
import { UserInfoService } from '../service/user-info.service';

@Component({
  selector: 'app-operator',
  templateUrl: './operator.component.html',
  styleUrls: ['./operator.component.css']
})
export class OperatorComponent implements OnInit {

  currentUser: User;
  constructor(userService: UserInfoService) { }

  ngOnInit() {
    console.log('userId:' + sessionStorage.getItem('currentUserId'));
  }

}
