import { Component } from '@angular/core';


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

  search(){
    this.results = false;
    this.countryService.searchResource(this.searchParam)
        .subscribe( countries => {
          console.log(countries)
          this.countries = countries;
        }, (err) => {
            this.results = true;
            this.countries = [];
        });
  }

}
