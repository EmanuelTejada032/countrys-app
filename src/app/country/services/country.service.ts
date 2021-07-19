import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiBaseUrl: string = "https://restcountries.eu/rest/v2";

  constructor( private http: HttpClient) { }

  searchResource( searchParam : string): Observable <any>{
      const url = `${this.apiBaseUrl}/name/${searchParam}`
      return this.http.get(url);

    }
  }
