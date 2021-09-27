import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-producto-view',
  templateUrl: './producto-view.component.html',
  styleUrls: ['./producto-view.component.css']
})
export class ProductoViewComponent implements OnInit {
  id:string
  constructor(private _route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.id = this._route.snapshot.paramMap.get('id');
  }

}
