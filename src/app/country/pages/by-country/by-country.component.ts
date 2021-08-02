import { Component, Input } from '@angular/core';


import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
    `
     li{
       cursor: pointer
     }
    `
  ]
})
export class ByCountryComponent {

  searchParam: string = '';
  results: boolean = false;
  countries: Country[] = [];
  suggestedCountries: Country[] = [];
  showSuggested: boolean = false;

  constructor( private countryService: CountryService){}

  search( searchParam: string ){
    this.showSuggested = false;
    this.results = false;
    this.searchParam = searchParam
    this.countryService.searchResource(this.searchParam)
        .subscribe( countries => {
          // console.log(countries)
          this.countries = countries;
        }, (err) => {
            this.results = true;
            this.countries = [];
        });
  }

  suggestions( searchParam: any){
      this.results = false;
      this.searchParam = searchParam;
      this.showSuggested = true
      this.countryService.searchResource(searchParam)
          .subscribe( countries => {
              return this.suggestedCountries = countries.splice(0, 3)  
          },(err) => this.suggestedCountries = [])
  }

  searchSuggested( searchPram: string){
      this.search(searchPram);
  }

}
