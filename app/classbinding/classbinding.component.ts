// this is an examle of binding css class and css style
// which has been assigned to html element from ts fields
// for the purpose of class binding means we are binding the class in button element
// of html to ts field if this field goes true the class will be assigned to button 
//element but if this field goes false it will not be assigned.

import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'cssclassbinding',
 // templateUrl: './classbinding.component.html', // just like that
  template: `
  <button class = "btn" [class.btn-primary] ="isActive" > Ready </button> 
  <button class = "btn" class.btn-warning ="{{isActive}}" > Go!! </button>
  <button class = "btn" [style.backgroundColor]= "isActive ? 'Pink':'white' "> yippie !! </button>
  <div>
  <button class = "btn" [ngStyle] = "ActiveStyles()">Multiple StyleBind</button>
  </div>
  <div>
  <button class = "btn" [ngClass] = "ActiveClasses()">Multiple Class Bind</button>
  </div>
  <app-eventbinding>chill</app-eventbinding>
  `
  // example of interpolation and property binding as well. 
//third button is when we are using dom propert style.backgroundColor and binding it wiith field of ts
// it also contains example of multin class binding and multi style binding from coursetro
})
export class ClassbindingComponent{
  isActive = true;

  ActiveClasses(){
    
    let setClasses = {
     
    btn: this.isActive,
    'btn-primary': this.isActive,
    
    }
    return setClasses;
  }

  ActiveStyles(){

    let setStyles = {
    'font-style': 'italic' ,
    'font-weight' : 'bold' ,
    'color' : 'Blue'
    }

    return setStyles;
  }
}
