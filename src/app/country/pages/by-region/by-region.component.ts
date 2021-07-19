import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: [
  ]
})
export class ByRegionComponent{

  searchParam: string = ''

  constructor( private countryService: CountryService){}

  search(){
    this.countryService.searchResource(this.searchParam)
        .subscribe( res => {
          console.log(res)
        });
  }

}
