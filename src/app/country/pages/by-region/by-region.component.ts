import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';


import { CountryService } from '../../services/country.service';


@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: [`
    button{
      margin-right: 5px;
    }
  `]
})
export class ByRegionComponent{

  regions: string[] = [ 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  activeRegion: string = '';
  countries: Country[] = [];

  constructor( private countryService: CountryService){}

  getCssClass( region: string): string {
    return (region === this.activeRegion) ? 'btn btn-primary' : 'btn btn-outline-primary'
  }

  activateRegion(region: string){
    this.activeRegion = region;
    this.countryService.getCountriesByRegion(this.activeRegion)
                .subscribe( countries => {
                  this.countries = countries
                },(err) => {
                  this.countries = [];
              })
  }

}
