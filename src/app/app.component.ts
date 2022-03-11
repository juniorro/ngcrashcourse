import { AfterViewInit, Component, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  title = 'Welcome to Angular';
  userId = 'Junior ' + 1;
  // https://angular.io/guide/lifecycle-hooks
  /* 
  ngOnInit()
  ngOnDestroy()
  ngAfterViewInit()
  ngOnChanges()
  ngDoCheck()
  ngAfterContentInit()
  ngAfterContentChecked()
  ngAfterViewChecked()

  */


  constructor() {
    console.log('constructor was called...');
  }
  
  ngOnInit(): void {
    console.log('ngOnInit was called...');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit was called...');
  }


  ngOnDestroy(): void {
    console.log('ngOnDestroy was called...');
  }

  login(event: string): void {
    console.log(event, 'from app component');
  }

  onChangeUsername(): void {
    console.log('Changing title...');
    this.userId = 'Junior ' + Math.floor(Math.random() * 100);
  }

  changeUsername(username: string): void {
    console.log('Changing title...');
    this.userId = username;
  }

}