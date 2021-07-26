import { Component } from '@angular/core';


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

  getCssClass( region: string): string {
    return (region === this.activeRegion) ? 'btn btn-primary' : 'btn btn-outline-primary'
  }

  activateRegion(region: string){
    this.activeRegion = region;
  }

}
