import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { NgModel } from '@angular/forms';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'Welcome to Angular';
  userId = 'Junior ' + 1;
  @ViewChild('inputElement') inputElmentRef: ElementRef<HTMLInputElement>;
  @ViewChild(UserComponent) userComRef: UserComponent;
  @ViewChildren('inputElement') elements: QueryList<ElementRef<HTMLInputElement>>;
  // @ViewChildren('inputElement, inputElement2') elements: QueryList<ElementRef<HTMLInputElement>>;
  @ViewChild(NgModel) ngElementRef: NgModel;
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

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit was called...');
    console.log(this.inputElmentRef);
    this.inputElmentRef.nativeElement.focus();
    // this.inputElmentRef.nativeElement.disabled = true;
    console.log(this.inputElmentRef.nativeElement.size);
    // this.inputElmentRef.nativeElement.type = 'file';
    console.log(this.userComRef);
    console.log(this.elements)
    console.log(this.ngElementRef);
    this.ngElementRef.control.valueChanges
      .subscribe(value => console.log(value));
  }

  login(event: string): void {
    console.log(event, 'from app component');
    this.inputElmentRef.nativeElement.click();
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