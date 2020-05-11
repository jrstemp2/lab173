import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FamousPeople } from './interfaces/famousPeople';


@Injectable({
  providedIn: 'root'
})
export class CSHOFService {
  apiUrl = 'https://grandcircusco.github.io/demo-apis';

  constructor(private http:HttpClient) { }

  getFamousPeople() {
    return this.http.get<FamousPeople>(`${this.apiUrl}/computer-science-hall-of-fame.json`);
  }

}
