import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnInit {
  user: any;
  mode: 'edit' | 'locked' = 'locked';
  buttonText = 'Edit';

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.user = this.userService.getUser(+params.get('id')!);
    });
    console.log(this.user);
  }

  changeMode(mode?: 'edit' | 'locked'): void {
      console.log(mode);
      this.mode = this.mode === 'locked' ? 'edit' : 'locked';
      this.buttonText = this.buttonText === 'Edit' ? 'Save' : 'Edit';
      if(mode === 'edit') {
          console.log('update the user');
      }
  }

}
