import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Welcome to Angular';
  users: any;
  currentUser = { id: 0, name: 'None Selected' };

  constructor(private userService: UserService){}

  ngOnInit(): void {
    this.users = this.userService.getUsers();
  }

  onViewUser(id: string): void {
    this.currentUser = this.userService.getUser(+id);
  }

}