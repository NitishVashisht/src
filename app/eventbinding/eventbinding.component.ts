// this is an example of event binding,event filtering and template variables.

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  //templateUrl: './eventbinding.component.html',
  //styleUrls: ['./eventbinding.component.css']
 template:
  `
  <div (click)= "onDivClicked()" >
  <button class = " btn btn-success" (click)= onSave($event)>Save </button>
  <button class="btn btn-danger" (click)="onClicked($event)">Event-Binded</button>
 </div>


 <!-- it is the first way to display content of input field using event filtering also if
 we want to bind display functionality to a button the second method is only way out
 using template variable (#email) -->

 <input (keyup.enter) = "onKeyUp($event)"/>

 <!-- it is the second way to display content of input field -->

 <input (keyup.enter) = "exp=$event.target.value;Experiment()" /> 

 <div>
 <!-- it is the third way to display content of input field using button and template variable -->
 <input #email />
 <button class = "btn btn-danger" (click)= "onSaveEmail(email.value)">Save-Email</button>
 </div>
 <app-twowaybinding> Yeah!!</app-twowaybinding>
 `  
})
export class EventbindingComponent implements OnInit {

  exp:string;
  constructor() { }
  ngOnInit() {} //one of the life-cycle hooks.

  onDivClicked():void{ 
    console.log("Div event was triggered");
    
  }
  onClicked($event):void{
    $event.stopPropagation(); //in case to stop the event bubbling out in DOM
    console.log("Button was clicked and event was fired ",$event);
  }

  onSave($event):void{
    // in order to use below, to stop propagation we need to use $event parameter in method otherwise
    //we cannot use it, angular will not understand the below calling statement. $event is must.
    $event.stopPropagation();  //in case to stop the event bubbling out in DOM 
    console.log("Save button was clicked");
  }

  // this is an example of event filtering where we filtered that only after pressing enter 
  //event will be binded and fired also we are getting value of whatever is interd inthe input field
  onKeyUp($event):void{
    console.log("Key up event was fired after pressing enter and value entered is :- ",
    $event.target.value);
  }
  onSaveEmail(x):void{
    console.log("Email saved with value of:-",x);
  }
  Experiment(){
    console.log("value of experiment is :- " ,this.exp);
  }
}

/*

output on console will be :-

Save button was clicked :- (when i clicked the save button it didnot bubble up to the parent div)\

Button was clicked and event was fired  ( when Event-Binded was clicked along with event object)
MouseEvent {isTrusted: true, screenX: 84, screenY: 199, clientX: 84, clientY: 108, …}


when only input tag is used and we press enter after filling somme thing in
Key up event was fired after pressing enter

*/
