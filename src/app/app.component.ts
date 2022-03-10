import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isAuthenticated = true;
  name = 'Junior';
  address = '123 Main st, Philadelphia';
  items = ['item 1', 'item 2', 'item 3', 'item 4', 'item 5', 'item 6'];

}
