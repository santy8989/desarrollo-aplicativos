import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input () element: any;
  constructor() { }

  ngOnInit(): void {
    console.log("asd",this.element)
  }

}
