import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModuleApi {
  private readonly apiModule: string = 'modules';
  private readonly apiAllModule: string = 'moduleInfo';
  private readonly apiAllModuleCondensed: string = 'moduleList';

  API_URL = 'https://nusmods.com/api/v2/';

  constructor(private api: HttpClient) { }

  getModuleInfo(acadYear: string, moduleCode: string): Observable<any> {
    return this.api.get(`${this.API_URL}/${acadYear}/${this.apiModule}/${moduleCode}.json`);
  } 

  getAllModule(acadYear: string): Observable<any> {
    return this.api.get(`${this.API_URL}/${acadYear}/${this.apiAllModule}.json`);
  }

  getAllModuleCondensed(acadYear: string): Observable<any> {
    return this.api.get(`${this.API_URL}/${acadYear}/${this.apiAllModuleCondensed}.json`);
  }

}