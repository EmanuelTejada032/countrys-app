import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


import { Country } from '../interfaces/country.interface';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiBaseUrl: string = "https://restcountries.eu/rest/v2";

  constructor( private http: HttpClient) { }

  get httpParams(){
    return  new HttpParams().set("fields", "name;capital;alpha2Code;population;flag");
  }

  searchResource( searchParam : string): Observable <Country[]>{
      const url = `${this.apiBaseUrl}/name/${searchParam}`
      return this.http.get<Country[]>(url, {params: this.httpParams})
                .pipe(
                  tap(console.log)
                )

    }

    searchCapital( searchParam: string) :Observable <Country[]>{
      const url = `${this.apiBaseUrl}/capital/${searchParam}`
      return this.http.get<Country[]>(url, {params: this.httpParams});
    }

    getCountryByCode( id: string): Observable<Country>{
      const url = `${this.apiBaseUrl}/alpha/${id}`
      return this.http.get<Country>(url);
    }

    getCountriesByRegion( region: string): Observable<Country[]>{
      const url = `${this.apiBaseUrl}/region/${region}`
      return this.http.get<Country[]>(url, {params: this.httpParams});
    }
  }
