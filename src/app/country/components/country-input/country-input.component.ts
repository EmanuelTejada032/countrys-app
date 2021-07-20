import { Component, Output , EventEmitter} from '@angular/core';


@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styles: [
  ]
})
export class CountryInputComponent {

   @Output() onEnter: EventEmitter<string> = new EventEmitter();  //event emiter 
   searchParam: string = "";
   

   search(){
      this.onEnter.emit(this.searchParam); //2 .onEnter event emit the value of this.searchParam on the Country input component
   }
}
