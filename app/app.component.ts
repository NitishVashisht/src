import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isActive = true;

  /* 
  for the purpose of class binding means we are binding the class in button element
  of html to ts field if this filed goes tru the class will be assigned to button 
  element but if this field goes false it will not be assigned.
 */

  htmlstring = 'my name is khan' /*just to check if we can send this value to display in the template
                                  of inputproperty component */
  isActiveroot: boolean = !this.isActive; //by deault value of boolean is false
  onPaint(argument) {
    console.log("output property has worked and inside the onPaint() and value :-", argument);
    /* 
    this is the method that will be called when the event happens and that event will be 
    defined in our outputproperty component.
    if we are passing some event data the will be pass on to this method from template that is 
    from onPaint($event) in app.component.html in <outputproperty>
    This data can be boolean , or object ,or even interface etc.
    $event represents standard dom event object
    */

  }
}
