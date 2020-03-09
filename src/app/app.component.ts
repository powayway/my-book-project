import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-book-project';

  constructor() {
    const config = {
      apiKey: "AIzaSyA1jTU5D9-BQfYUkxuuu6myIZ8Jnscodyo",
      authDomain: "my-book-app-50e16.firebaseapp.com",
      databaseURL: "https://my-book-app-50e16.firebaseio.com",
      projectId: "my-book-app-50e16",
      storageBucket: "my-book-app-50e16.appspot.com",
      messagingSenderId: "398243230114",
      appId: "1:398243230114:web:e8afeaed048ba189ef02fb",
      measurementId: "G-S6SLM7D7RY"
    };
    firebase.initializeApp(config);
  }
}
