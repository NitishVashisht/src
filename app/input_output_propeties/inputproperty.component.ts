import { Component,Input } from '@angular/core';

@Component ({

    selector:'inputproperty',
    template:
    `
    <h1 [class.SecondCssClass] = "isActive" > yo mofo </h1> 
    <h1 [class.SecondCssClass] = "isActive1" > no mofo </h1>
    <h1 [class.SecondCssClass] = "isActive2" > lo mofo </h1>
    `
    ,
    inputs: ['isActive1'] // it is second way of handling input property, which is not good compare 
    //to @Input(), it is property of component decorator which acts as an array that will hold all the
    //potential elements that acts as inputs.

})

export class inputpropertyComponent {

@Input () isActive : boolean;
@Input ('input-allias') isActive2 : boolean;
   isActive1:boolean;
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
   */
}
