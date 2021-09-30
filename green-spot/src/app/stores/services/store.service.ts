import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {catchError} from "rxjs/operators";
import {Store} from "../interfaces/store.interface";
import { Data } from '../../interfaces/data.interface';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private apiUrl: string = 'https://613eaa03e9d92a0017e1724f.mockapi.io/greenspot'

  constructor(private http: HttpClient) { }
  getStores():Observable<Data[]> {
    const url = `${this.apiUrl}/store`
    return this.http.get<Data[]>(url)
  }
  addStore(data):Observable<Data[]>{
    // data= JSON.stringify(data);
    return this.http.post<Data[]>(this.apiUrl+'store', {
      title:data.title,
      descrip:data.descrip,
      image:data.image,
  })
  }
  editStore(data,id):Observable<Data[]>{
    // data= JSON.stringify(data);
    return this.http.put<Data[]>(this.apiUrl+'store/'+id, {
      title:data.title,
      descrip:data.descrip,
      image:data.image,
  })
  }
  deleteStore(id):Observable<Data[]>{
    // data= JSON.stringify(data);
   
    return this.http.delete<Data[]>(this.apiUrl+'store/'+id)
  }
  getStore(id:string):Observable<Data> {
   
    const url = `${this.apiUrl}/store/${id}`
    return this.http.get<Data>(url)
  }
  getComments(id):Observable<Comment[]>{
    return this.http.get<Comment[]>(this.apiUrl+'storecoments?idStore='+id)
  }
  addComments(id,form):Observable<Comment[]>{
    return this.http.post<Comment[]>(this.apiUrl+'storecoments',{
      UserName:form.value.nombre,
      comment:form.value.comentario,
      score:form.value.score,
      idStore:id

    })
  }
}