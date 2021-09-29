import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/products/services/product.service';
import { StoreService } from 'src/app/stores/services/store.service';
import { Data } from '../../interfaces/data.interface';

@Component({
  selector: 'app-long-card',
  templateUrl: './long-card.component.html',
  styleUrls: ['./long-card.component.css']
})
export class LongCardComponent implements OnInit {
  @Input() type:string;
  @Input() id:string;
  data:Data
  public form: FormGroup
  comments:Comment[]
  isLoad:boolean=false;
  constructor(private _productService: ProductService,private _storeService: StoreService,private formBuilder: FormBuilder ) { }

  ngOnInit(): void {
    if(this.type=="product"){
      this.getProduct();
    }else{
      this.getStore();
    }
    this.form = this.formBuilder.group({
      nombre: [
        null,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ]
      ],
      comentario: [
        null,
        [
          Validators.required,
          Validators.minLength(6),
          // Validators.maxLength(30),
        ]
      ],
      score: [
        null,
        [
          Validators.required,
          Validators.min(0),
          Validators.max(5),
        ]
      ]
     })

  }
  getProduct(){
    this.isLoad=false
    this._productService.getProduct(this.id).subscribe(response => {
      console.log(response);
      this.data=response
      this._productService.getComments(this.id).subscribe(response => {
        console.log(response);
        this.comments=response
        this.isLoad=true;
      }, error => {
        console.error("tuve un Error" + error)
  
      })
      
    }, error => {
      console.error("tuve un Error" + error)

    })
  }
  addComent(){
    
    if(this.type=="product"){
      this._productService.addComments(this.id,this.form).subscribe(response => {
        console.log(response);
        if(this.type=="product"){
          this.getProduct();
        }else{
          this.getStore();
        }
        this.form.reset()
      }, error => {
        console.error("tuve un Error" + error)

      })
    }else{
      this._storeService.addComments(this.id,this.form).subscribe(response => {
        console.log(response);
        if(this.type=="product"){
          this.getProduct();
        }else{
          this.getStore();
        }
        this.form.reset()
      }, error => {
        console.error("tuve un Error" + error)
      })

    }
  }
  getStore(){
    this.isLoad=false
    this._storeService.getStore(this.id).subscribe(response => {
      console.log(response);
      this.data=response
      this.isLoad=true
      this._storeService.getComments(this.id).subscribe(response => {
        console.log(response);
        this.comments=response
      }, error => {
        console.error("tuve un Error" + error)
  
      })
      
    }, error => {
      console.error("tuve un Error" + error)

    })

  }

}
