import { AbstractControl } from '@angular/forms';
/*

AbstractControl is parent to three which is FormGroup FormControl and FormArray
param:HTMLInputElement is parameter to addTopics,
param is an template's input variable or w can say its a kind of referece to html element.
 
*/

import { Component, OnInit } from '@angular/core';
import { FormGroup,FormArray,FormControl } from '@angular/forms';

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
    param.value = '';
  }
  get topicarray(){
    return (<FormArray>this.form.get('topics'));
  }

  delete(control:FormControl){
   let value = this.topicarray.controls.indexOf(control);
  this.topicarray.removeAt(value);
  }

}
