//two way binding example along with the bannana in the box syntax 
//we have to import FormsModule from @angular/forms into our root module app.module and update imports 
//property of NgModule.This ngModel is directive that is defined in FormsModule
/*
If you have a one-way binding to ngModel with [] syntax, changing the value of the domain model
in the component class will set the value in the view. 
If you have a two-way binding with [()] syntax (also known as 'banana-box syntax'),
the value in the UI will always be synced back to the domain model in your class as well
*/



import { Component } from '@angular/core';


@Component({
  selector: 'app-twowaybinding',
  //templateUrl: './twowaybinding.component.html',
  //styleUrls: ['./twowaybinding.component.css']
template:
`
  <div>
  <input [value] = "email" (keyup.enter) = "email = $event.target.value;onPressed() " />
  <input [(ngModel)] = "email"/>
  <button class = "btn btn-danger" (click)= "onPressed()">Enter</button>
  </div>
`
})

export class TwowaybindingComponent {
email:string='abc@xyz.com';
onPressed(){
  console.log("Value of variable email is now : ",this.email);
}

}
