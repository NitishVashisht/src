import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isActive=true;  // for the purpose of class binding means we are binding the class in button element
 // of html to ts field if this filed goes tru the class will be assigned to button 
 //element but if this field goes false it will not be assigned.
isActiveroot : boolean = !this.isActiveroot; //by deault value of boolean is false

}
