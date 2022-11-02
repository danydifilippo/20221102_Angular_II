import { Component, OnInit } from '@angular/core';
import { IItems } from '../interfaces/iitems';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  items = [
    {
      id: 1,
      item: "pagare assicurazione auto",
    },
    {
      id: 2,
      item: "comprare regalo per Anna",
    },
    {
      id: 3,
      item: "comprare biglietti concerto",
    },
    {
      id: 4,
      item: "studiare i Components Angular",
    },
    {
      id: 5,
      item: "completare l'esercizio Angular2",
    }
  ]
  classe_done = 'cgray'

  done(obj:IItems){
    this.classe_done =(this.classe_done=== 'cgray')? 'cnormal':'cgray'
  }

}
