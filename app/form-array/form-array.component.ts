/*

AbstractControl is parent to three which is FormGroup FormControl and FormArray
param:HTMLInputElement is parameter to addTopics,
param is an template's variable or we can say its a kind of referece to html(input) element.
list-group is a bootstrap class
the argument type to delete is FormControl as in FormArray we have elements which are FormControls as of now
can FormArray store different type of AbstractControls like if it can store FormControl and FormGroup
simultaneously
 
*/

import { Component, OnInit } from '@angular/core';
import { FormGroup,FormArray,FormControl,FormBuilder,AbstractControl, Validators  } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css']
})
export class FormArrayComponent{
  constructor() { }

  form = new FormGroup({'topics' : new FormArray([])});

  addTopics(param:HTMLInputElement){
    this.topicarray.push(new FormControl(param.value));
    //this.topicarray.push(new FormGroup({ })); //trying to add FormGroup along with FormControl
    param.value = '';
  }
  get topicarray(){
    return (<FormArray>this.form.get('topics')); //type assertion from AbstractControl object to FormArray
  }

  delete(control:FormControl){
   let value = this.topicarray.controls.indexOf(control); //value will get the index
  this.topicarray.removeAt(value);
  }

}


// example of how to use form vuilder class to form imp aspects of form using FormBuilder class by injecting
//it into constructor of our component class.

@Component({
  selector: 'form-builder'
})

export class formBuilder {
constructor(public form:any,bobbuilder:FormBuilder){
this.form = bobbuilder.group({
  'name':['',Validators.required], // no need of writing new FormControl()
  'contact' :bobbuilder.group({
    'email' : [],     // no need of writing new FormControl() this is how FormControl is formed as an array
    'phone' : []      //no need of writing new FormControl()
  }),
  'topics':bobbuilder.array([])
})
}
}
