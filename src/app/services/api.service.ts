import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  private baseUrl = 'https://api.github.com/';
  constructor(private http: HttpClient) { }


  public get<T>(url: string): T {
    return this.http.get(this.baseUrl + url) as any;
  }
}
