import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

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

