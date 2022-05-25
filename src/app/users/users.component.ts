import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: [
  ]
})
export class UsersComponent implements OnInit {

  users: any[];

  constructor(private userService: UserService) {
    this.users = this.userService.getUsers();
  }
  

  ngOnInit(): void {
  }

}
