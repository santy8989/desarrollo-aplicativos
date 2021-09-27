import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-store-view',
  templateUrl: './store-view.component.html',
  styleUrls: ['./store-view.component.css']
})
export class StoreViewComponent implements OnInit {

  id:string
  constructor(private _route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.id = this._route.snapshot.paramMap.get('id');
  }

}
