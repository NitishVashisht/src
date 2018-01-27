import { Component,Input } from '@angular/core';

@Component ({

    selector:'inputproperty',
    template:
    `
    <h1 [class.SecondCssClass] = "isActive" > yo mofo </h1> 
    <h1 [class.SecondCssClass] = "isActive1" > no mofo </h1>
    <h1 [class.SecondCssClass] = "isActive2" > lo mofo </h1>
    <div> {{htmlstring}}</div>

    `
    ,
    inputs: ['isActive1'] // it is second way of handling input property, which is not good compare 
    //to @Input(), it is property of component decorator which acts as an array that will hold all the
    //potential elements that acts as inputs.

})

export class inputpropertyComponent {

@Input () isActive : boolean;
@Input ('input-allias') isActive2 : boolean;
@Input () htmlstring:string;

   isActive1:boolean;
   printValues(){
   console.log("Value of isActive :" + this.isActive + "value of isActive1 :" + this.isActive1);
   }
   /*
   @Input decorator is first way of declaring a particular field as an input property
   to a component.
   @Input('input-allias') isActive2 is used when we are alliasing the isActive2 field so that instead
   of <inputproperty [isActive2] = 'value'> we will be able to use,
   <inputproperty [input-allias]= 'value'>.
   there is a major advantage of this if in near future we change the name of field whose allias we
   have made then there will be no impact of this on view logic coz anyways we are using allias only
   also when are creatin a reusable component then we donot wanna tell our clients what naming
   conventions we are using in our code .
   What ever the value is coming from host element to our input properties here which is 
   boolean can not be used and the value if we try to print will still show undefined 
   of these three input properties .The value is only meaning full for the template.
   */
}

let instance = new inputpropertyComponent();
instance.printValues();
/* 
in order to check if we can use the value coming from host component's template to our input proper
ties we have created an instance and invoked the method to print in console and output is.

Output:- Value of isActive :undefinedvalue of isActive1 :undefined 

so there is no point of making the instance and using the value passed here from host component

One more thing to take care about here is,that in this ts file there is one component
 that has been created by us but that component will of no use until unless it gets rendered means
 until unless we use its css selector in some html code.

 but as we have created the instance of this ts class of component it can invoke the methods defined
 inside the class the we can see in console as output is still coming even after commenting the 
 inputproperty tag in app.component.html
*/
