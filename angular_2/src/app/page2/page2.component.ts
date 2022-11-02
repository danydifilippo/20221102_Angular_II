import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  currentStyles = {
    'margin' : 'auto',
    'margin-top' : '5em',
    'border' : '2px solid blue',
    'display' : 'flex',
    'flex-direction' : 'column',
    'max-width' : '300px',
    'gap' : '4px',
    'padding' : '1em'
  }

}
