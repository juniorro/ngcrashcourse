import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnInit {
  patient: any;

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.patient = this.userService.getUser(+params.get('id')!);
    });
    console.log(this.patient);
  }

}
