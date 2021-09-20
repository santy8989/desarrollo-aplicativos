import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {catchError} from "rxjs/operators";
import {Store} from "../interfaces/store.interface";

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private apiUrl: string = 'https://613eaa03e9d92a0017e1724f.mockapi.io/greenspot'

  constructor(private http: HttpClient) { }
  getStores():Observable<Store[]> {
    console.log("service")
    const url = `${this.apiUrl}/store`
    return this.http.get<Store[]>(url)
  }
}