import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // String interpolation
  title = 'Welcome to Angular';
  paragrapText = 'This is a paragraph';
  isAuthenticated = true;
  imageUrl = 'https://images.unsplash.com/photo-1519046904884-53103b34b206';

  getDescription(): string {
    // logic
    const element = document.getElementById('progress') as HTMLDivElement;
    console.log(element.style);
    return 'This is the description';
  }
}