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

7. EventEmitter instance write will ikvoke a method named emit which will be used to raise or publish
   the event or notifying others that something has happend.

8. for a component decorator selector and template are mendotary
*/

import {Component,Output,EventEmitter} from "@angular/core" ;

@Component({
    selector : 'outputproperty',
    template : `
    <div (click) = 'writeMethod()'> 
    <h1 class = "SecondCssClass"> Click here for outputproperty </h1>
    <h1 class = "SecondCssClass" (click) = "writeMethod3()"> outputproperty with passing event data </h1> 
    </div>
    `
})

export class outputPropertyComponent{

    @Output('paint') write = new EventEmitter();

    red:boolean = true;
    myobject= {
        attr1:1,
        attr2:"Nitish vashisht"
    }
    
    writeMethod(): any {
        console.log("inside the writeMethod()");
        this.write.emit();
    }
    /* as we are emitting nothing here but in app.component.ts we have used method that has parameter
     that parameter will get value of $event standard dom event object which in this case is not
     provided so the output will be as below from app.component.ts :-
      inside the writeMethod()
      output property has worked and inside the onPaint() and value :-undefined
    */
    writeMethod3(){
        console.log("inside the writeMethod3()");
        this.write.emit(this.red); 
        this.write.emit(this.myobject.attr1);
        this.write.emit(this.myobject);
        this.write.emit({one:1,two:"two"});
    }
    /*
    here our case is different here we are emitting three diff information corresponding to
    same event in local component to the host component, so three different times the custom event 
    will be handled inside the event handler which in this case is our host component(root component)
    so three diff times onPoint() method will get fired and below will be output
     inside the writeMethod3()
     output property has worked and inside the onPaint() and value :- true
     output property has worked and inside the onPaint() and value :- 1
     output property has worked and inside the onPaint() and value :- {attr1: 1, attr2: "Nitish vashisht"}
     output property has worked and inside the onPaint() and value :- {one: 1, two: "two"}
    */

    writeMethod2(){  
        console.log("inside the writeMethod2()"); 
        this.write.emit();  
    }
}



/*
let instance = new outputPropertyComponent();
instance.writeMethod2();
 
 We used instance and 2nd methond to check whether we can emit the event by just invoking the method
 after making the instance of the class.

 This has not worked so it is clear that instance making and invoking of writeMethod2 will not
 emit the info to the host component.
 
  */