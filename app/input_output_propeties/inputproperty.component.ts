import { Component,Input } from '@angular/core';

@Component ({

    selector:'inputproperty',
    template:
    `
    <h1 [class.SecondCssClass] = "isActive" > yo mofo </h1> 
    <h1 [class.SecondCssClass] = "isActive1" > no mofo </h1>
    `
    ,
    inputs: ['isActive1']
})

export class inputpropertyComponent {

@Input () isActive : boolean;
   isActive1:boolean;
}
