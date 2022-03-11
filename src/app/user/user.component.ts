import { Component, Input, OnChanges, Output, EventEmitter, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnChanges {
  @Input() username: string;
  @Input() address: string;
  @Input() color: string;
  @Output() loginEvent = new EventEmitter<string>();
  @Output() nameChageEvent = new EventEmitter<string>();

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges was called...');
    console.log(changes);
    console.log(changes['username']);
    if(changes['username'] && changes['username'].currentValue) {
      //this.username = changes['username'].currentValue;
    }
  }

  onLogin(): void {
    console.log('User requests to log in from user component');
    this.loginEvent.emit('User requests to log in');
  }

  onChangeUsername(): void {
    this.username = 'Junior ' + Math.floor(Math.random() * 100);
    this.nameChageEvent.emit(this.username);
  }

}
