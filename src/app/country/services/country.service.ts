import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


import { Country } from '../interfaces/country.interface';


@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiBaseUrl: string = "https://restcountries.eu/rest/v2";

  constructor( private http: HttpClient) { }

  searchResource( searchParam : string): Observable <Country[]>{
      const url = `${this.apiBaseUrl}/name/${searchParam}`
      return this.http.get<Country[]>(url);

    }
  }
