import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: any;
  currentUser = { id: 0, name: 'None Selected' };

  constructor(private userService: UserService, private router: Router){}

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
        (users: any[]) => {
            console.log(users);
            this.users = users;
        },
        (error: any) => {
           console.log(error);
        },
        () => {
           console.log('Finished retrieving data');
        }
    );
  }

  onViewUser(id: string): void {
    this.currentUser = this.userService.getUser(+id);
    this.router.navigate(['/user', id]);
  }

}
