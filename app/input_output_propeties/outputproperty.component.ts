/*
Steps to implement the output property in a component.

1. create a component (importing decorators Component,Output and EventEmitter class)
2. Register the component with our parent or root module.
3. Use Output decorator (along with allias is always better) to tell compiler the property that will
   be used as output 
4. We have to use new EventEmiiter() in order to make that field as output and instance of 
   event emiiter class as well because event emmiter is not a primitive type we have to use new 
   operator.
5.Now we have created a method(writeMethod) which will be called when div inside our outputproperty 
    component will be clicked because we have bind the (click) event with this method and inside 
    this method we have called this.fieldname.emit() method that will emit to the calling component
    which is our app.component.ts.

6. In the app.component.html file we will use the allias of output as 

<outputproperty (paint) = "onPaint() ></outputproperty>

so from emit control will come here and then onPaint method of app.component.ts will be fired.
   
   




   for a component decorator selector and template are mendotary
*/

import {Component,Output,EventEmitter} from "@angular/core" ;

@Component({
    selector : 'outputproperty',
    template : `<div (click) = 'writeMethod()'> 
    <h2 [class] = "SecondCssClass"> Click here for outputproperty </h2>
    </div>`
})

export class outputPropertyComponent{

    @Output('paint') write = new EventEmitter();

    red:boolean = false;
    writeMethod(): any {
    console.log("inside the writeMethod()");
    this.write.emit();
    }
}