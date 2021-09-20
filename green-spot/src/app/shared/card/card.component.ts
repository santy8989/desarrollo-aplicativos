import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input () element: any;
  @Input () type: string;
  constructor() { }

  ngOnInit(): void {
    console.log("hola",this.element.title)
  }

}
