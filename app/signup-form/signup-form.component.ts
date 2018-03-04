
/*

 * A validator is a function that processes a {@link FormControl} or collection of
 * controls and returns a map of errors. A null map means that validation has passed.
 
ValidatoFn which can be parameter type in constructors of FormGroup and FormControl is basically an Interface which has one method 

IN case of creating custom validation its better to create a class with custom validation function which can be static or non static in
nature and then all the validation functions can be accomodated in this class so to use any custom validation on any field of form we can
just import that class file and use the methods or functions, but these functions should be of signature as 

(control : AbstractControl) :ValidationErrors | null

We have to import AbstractControl and ValidationErrors from @angular/forms in  order to use them in our class.

*/

import { Component } from '@angular/core';
import {FormControl,FormGroup, Validators} from '@angular/forms' //all three are classes defined in the package
import { customValidator } from './customvalidator';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})

export class SignupFormComponent {
  form = new FormGroup({ //creating the instance of class FormGroup and then initializing the constructor with one non optional and two non optional parameters
    'username': new FormControl('',[ Validators.required,Validators.minLength(3),customValidator.noDot,customValidator.noSpace],customValidator.ifUnique),
     // using array of ValidatorFn interface types

    'password': new FormControl('',Validators.required) //using ValidatorFn interface type only
  });

  get user(){
    return this.form.get('username');  // form.get('FormControl') is already defined by this way we can access any FormControl in any FormGroup
  }
  get pass(){
    return this.form.get('password');
  }


}
