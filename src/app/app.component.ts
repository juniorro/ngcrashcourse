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
  name = 'Junior';
  isVisible = true;
  address = '123 Main st, Philadelphia';

  getDescription(): string {
    // logic
    const element = document.getElementById('progress') as HTMLDivElement;
    // console.log(element.style);
    return 'This is the description';
  }

  onSubmit(event: Event): void {
    console.log('Submitted...', event);
  }

  printValue(phone: HTMLInputElement): void  {
    console.log(phone);
  }

  callPhone(phone: string): void  {
    console.log(phone);
  }

  mouseOver(event: any): void {
    console.log(event)
  }

  uploadFile(event: Event): void {
    console.log(event)
  }

}
