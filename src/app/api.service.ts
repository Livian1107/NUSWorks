import { Injectable } from '@angular/core';
import { HttpClient, HttpBackend } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  constructor(private http: HttpClient, handler: HttpBackend ) {
    this.http = new HttpClient(handler);
  }
  
  API_KEY = '';
  
  public getMod(code: string) {
    return this.http.get(`https://nusmods.com/api/v2/2019-2020/modules/${code}.json`);
  }
}