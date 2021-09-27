import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {catchError} from "rxjs/operators";
import {Product} from "../interfaces/product.interface";
import { Data } from '../../interfaces/data.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl: string = 'https://613eaa03e9d92a0017e1724f.mockapi.io/greenspot'

  constructor(private http: HttpClient) { }

 


  getProducts():Observable<Data[]> {
   
    const url = `${this.apiUrl}/products`
    return this.http.get<Data[]>(url)
  }
  getProduct(id:string):Observable<Data> {
   
    const url = `${this.apiUrl}/products/${id}`
    return this.http.get<Data>(url)
  }
  addProduct(data):Observable<Data[]>{
    // data= JSON.stringify(data);
    console.log(data)
    return this.http.post<Data[]>(this.apiUrl+'products', {
      title:data.title,
      descrip:data.descrip,
      image:data.image,
  })
  }
  editProduct(data,id):Observable<Data[]>{
    // data= JSON.stringify(data);
    console.log(data)
    return this.http.put<Data[]>(this.apiUrl+'products/'+id, {
      title:data.title,
      descrip:data.descrip,
      image:data.image,
  })
  }
  deleteProduct(id):Observable<Data[]>{
    // data= JSON.stringify(data);
   
    return this.http.delete<Data[]>(this.apiUrl+'products/'+id)
  }
  getComments(id):Observable<Comment[]>{
    return this.http.get<Comment[]>(this.apiUrl+'comments?idProduct='+id)
  }
  addComments(id,form):Observable<Comment[]>{
    console.log(form.value)
    return this.http.post<Comment[]>(this.apiUrl+'comments',{
      UserName:form.value.nombre,
      comment:form.value.comentario,
      score:form.value.score,
      idProduct:id

    })
  }
}