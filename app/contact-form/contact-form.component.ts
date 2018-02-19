/*
<input ngModel name= "firstName" type="text" id = "firstName" #name= "ngModel" (change)= "log(name)">

#name is template variable which we are providing as parameter to log method which is defined in our  ts class 
it is also a type of template driven approach (using ng Model directive)to impose validations on the form .
ng model with name implements this functionality by creating control object under the hood for input field
so no need of using class= "form-control" in input tag.

*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
      log(x){
        console.log(x);
      }
}
