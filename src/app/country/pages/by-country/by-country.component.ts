import { Component, Input } from '@angular/core';


import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
  ]
})
export class ByCountryComponent {

  searchParam: string = '';
  results: boolean = false;
  countries: Country[] = [];

  constructor( private countryService: CountryService){}

  search( searchParam: string ){
    this.results = false;
    this.searchParam = searchParam
    this.countryService.searchResource(this.searchParam)
        .subscribe( countries => {
          console.log(countries)
          this.countries = countries;
        }, (err) => {
            this.results = true;
            this.countries = [];
        });
  }

  suggestions( searchParam: any){
      this.results = false;
      console.log(searchParam);
  }

}
