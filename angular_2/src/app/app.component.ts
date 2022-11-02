import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_2';

  currentStyles = {
    'margin' : '5em',
    'border' : '2px solid blue',
    'display' : 'flex',
    'flex-direction' : 'column',
  }
}
