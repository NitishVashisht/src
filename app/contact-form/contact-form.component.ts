/*
<input ngModel name= "firstName" type="text" id = "firstName" #name= "ngModel" (change)= "log(name)">

#name is template variable which we are providing as parameter to log method which is defined in our  ts class 
it is also a type of template driven approach (using ng Model directive)to impose validations on the form .
ng model with name implements this functionality by creating control object under the hood for input field
so no need of using class= "form-control" in input tag.

<input required ngModel name= "firstName" type="text" id = "firstName" #name= "ngModel" (change)= "log(name)">
here "required" puts a validation means this field is required if no value is provided to input field then 
we can raise an error of our choice just below this input field as 

<div *ngIf="!name.valid && name.touched" class="alert alert-danger">this field is requied</div>

ngIf is structural directive name is our template variable and .valid and .touched are properties of control 
  object that
has created by angular under the hood and that we reference through our template variable.

submit(x) method is implemented to raise the custom event that has been defined in ngForm directive class this custom event and output property
is ngSubmit

contactMethods is an array of objects currently containing two objects with two properties each.
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})

export class ContactFormComponent {
  contactMethods = [{id:1,name:'Email'},{id:2,name:'Phone'}]
  log(x){
    console.log(x);
  }
  submit(x){
    console.log(x);
  }
}
