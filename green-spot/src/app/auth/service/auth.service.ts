import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Usuario} from "../interfaces/Usuario";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl :string = "https://616f5cb1715a630017b39c57.mockapi.io/greenspot/user";
  constructor(private http: HttpClient) { }

  login(usuario:string):Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.baseUrl}/?name=${usuario}`)
  }
}
