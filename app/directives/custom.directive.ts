import { Directive,Input,HostListener,ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomdirective]'
})
export class CustomDirective {
  value:string;
  constructor(private el?:ElementRef){ //injection and class will come to know about the dependencies here.
   }
  @Input('appCustomdirective') format:string;
  @HostListener('keydown') onClick(){
    this.value = this.el.nativeElement.value;
    if(this.format == 'lower'){
    this.el.nativeElement.value = this.value.toLowerCase();
   }
    else
    this.el.nativeElement.value = this.value.toUpperCase();
  }
}
