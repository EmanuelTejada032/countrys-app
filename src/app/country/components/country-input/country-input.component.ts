import { Component, Output , EventEmitter, OnInit} from '@angular/core';
import { Subject } from 'rxjs';
import {debounceTime } from 'rxjs/operators'


@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styles: [
  ]
})
export class CountryInputComponent implements OnInit {

   @Output() onEnter: EventEmitter<string> = new EventEmitter();  //event emiter 
   @Output() onDebounce: EventEmitter<string> = new EventEmitter();

   debouncer: Subject<string> = new Subject<string>();
   searchParam: string = "";
   
   ngOnInit(){
      this.debouncer
      .pipe(   // pipe modify the output on subscribe
         debounceTime(300) // Dont do subscribe untill 300 ms after input event;
      )  
      .subscribe( value => {
         this.onDebounce.emit(value);
      })
   }

   search(){
      this.onEnter.emit(this.searchParam); // EventEmitter 2. onEnter event emit the value of this.searchParam on the Country input component
   }

   pressKey(){
      this.debouncer.next(this.searchParam); //debouncer 2 .
   }
}
