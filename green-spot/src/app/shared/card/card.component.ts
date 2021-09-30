import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input () element: any;
  @Input () type: string;
  route:string
  constructor() { }

  ngOnInit(): void {
    if (this.type=="producto"){
      this.route="/products/view/"
    }else{
      this.route="/store/view/"
    }
  }

}
