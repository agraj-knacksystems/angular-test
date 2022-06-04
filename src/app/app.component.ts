import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  /**
   * {
      "message": "https://images.dog.ceo/breeds/appenzeller/n02107908_599.jpg",
      "status": "success"
     }
   */
  readonly url = `https://dog.ceo/api/breeds/image/random`;

  constructor(private http: HttpClient) {}
}
