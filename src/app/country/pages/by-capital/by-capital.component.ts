import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
})
export class ByCapitalComponent {

  searchParam: string = '';
  results: boolean = false;
  countries: Country[] = [];

  constructor( private countryService: CountryService){}

  search( searchParam: string ){
    this.results = false;
    this.searchParam = searchParam
    this.countryService.searchCapital(this.searchParam)
        .subscribe( countries  => {
          console.log(countries)
          this.countries = countries;
        }, (err) => {
            this.results = true;
            this.countries = [];
        });
  }
}
