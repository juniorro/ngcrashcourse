import { Component } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, Router } from '@angular/router';
import { Event } from '@angular/router';
import { NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to Angular';
  isLoading: boolean = false;

  constructor(private router: Router) {
      router.events.subscribe((event: Event) => {
          console.log(event);
      });
  }

  setLoadingIndicator(event: Event): void {
      if(event instanceof NavigationStart) {
          this.isLoading = true;
      }
      if(event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
          setTimeout(() => {
          this.isLoading = false;
          }, 6 * 1000)
      }
  }
}
