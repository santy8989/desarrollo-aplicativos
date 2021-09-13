import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {catchError} from "rxjs/operators";
import {Product} from "../interfaces/product.interface";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl: string = 'https://613eaa03e9d92a0017e1724f.mockapi.io/greenspot'

  constructor(private http: HttpClient) { }

 


  getProducts():Observable<Product[]> {
    console.log("service")
    const url = `${this.apiUrl}/products/`
    return this.http.get<Product[]>(url)
  }
}
