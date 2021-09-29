import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cover-image',
  templateUrl: './cover-image.component.html',
  styleUrls: ['./cover-image.component.css']
})
export class CoverImageComponent implements OnInit {
  @Input () title: string;
  @Input () subtitle: string;
  @Input () route:string;

  constructor() { }

  ngOnInit(): void {
  }

}
