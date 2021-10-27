

import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Component, ElementRef, Inject, NgZone, Optional, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { take } from 'rxjs/operators';
import { ProductService } from 'src/app/products/services/product.service';
import { StoreService } from 'src/app/stores/services/store.service';
import { Data } from '../../interfaces/data.interface';


@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent {

  action:string;
  type:string;
  local_data:any;
  isValid:boolean;
  body:Data={
    title:"",
    image:"https://www.kenyons.com/wp-content/uploads/2017/04/default-image.jpg",
    descrip:"",
    lat:0,
    lon:0
  };

  @ViewChild('autosize') autosize: CdkTextareaAutosize;
  @ViewChild('name') name: ElementRef;

  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this._ngZone.onStable.pipe(take(1))
        .subscribe(() => this.autosize.resizeToFitContent(true));
  }
  constructor(private _ngZone: NgZone,
    public dialogRef: MatDialogRef<DialogBoxComponent>,
    private _productService: ProductService,
    private _storeService: StoreService,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: Data) {
    this.local_data = {...data};
    this.action = this.local_data.action;
    this.isValid=this.action=="Agregar" ? false : true 
    this.type= this.local_data.type

  }

 
  Submit() {
    this.body.title = this.local_data.title
    if(this.local_data.image)
      this.body.image = this.local_data.image
    if(this.local_data.lat)
      this.body.lat = this.local_data.lat
    if(this.local_data.lon)
      this.body.lon = this.local_data.lon
    if(this.local_data.descrip)
      this.body.descrip = this.local_data.descrip
    if(this.type=="producto")
    {
       switch (this.action) {
        case "Agregar": {
          this._productService.addProduct(this.body).subscribe(response => {
            this.dialogRef.close({
              event: this.action,
              data: this.local_data
            });
          }, error => {
            console.error("tuve un Error" + error)
          })
        }
        break;
        case "Editar": {
          this._productService.editProduct(this.body,this.local_data.id).subscribe(response => {
            this.dialogRef.close({
              event: this.action,
              data: this.local_data
            });
          }, error => {
            console.error("tuve un Error" + error)
          })
        }
        break;
        case "Eliminar": {
          this._productService.deleteProduct(this.local_data.id).subscribe(response => {
            this.dialogRef.close({
              event: this.action,
              data: this.local_data
            });
          }, error => {
            console.error("tuve un Error" + error)
          })
        }
        break;
      }
    }else{
      switch (this.action) {
        case "Agregar": {
          this._storeService.addStore(this.body).subscribe(response => {
            this.dialogRef.close({
              event: this.action,
              data: this.local_data
            });
          }, error => {
            console.error("tuve un Error" + error)
          })
        }
        break;
        case "Editar": {
          this._storeService.editStore(this.body,this.local_data.id).subscribe(response => {
            this.dialogRef.close({
              event: this.action,
              data: this.local_data
            });
          }, error => {
            console.error("tuve un Error" + error)

          })
        }
        break;
        case "Eliminar": {
          this._storeService.deleteStore(this.local_data.id).subscribe(response => {
            this.dialogRef.close({
              event: this.action,
              data: this.local_data
            });
          }, error => {
            console.error("tuve un Error" + error)
          })
        }
      }
    }
  }
  closeDialog(){
    this.dialogRef.close({event:'Cancel'});
  }
  checkValidity(flag){
    if(flag) 
      this.isValid=true
    else 
      this.isValid=false
  }

}