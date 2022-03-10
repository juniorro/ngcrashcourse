import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  title = 'Welcome to Angular';
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



}