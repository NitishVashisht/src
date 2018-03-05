/*

ValidationErrors is a type defined as , its an object with 'key' : value pair/pairs

type ValidationErrors = {
    [key: string]: any;
}; 

So we can either use ValidationErrors or [key: string]: any as return type either of them is fine
Here Key plays an ipmortant role,it will be the name of validation error and it will directly get embedded in errors property
of FormGroup this errors propert contains all errors for example required ,minlength and now noSpace
noDot.

With importing ValidationErrors we can use simply {[key:string]:any} as return type of our static methods
always keep keys in single quotes its a good habbit.

------------------------------------------------------------------------------------------------------------------------------------------------

return new Promise((resolve,reject) => {}); new Promise means we are creating an object and constructor takes a parameter 

(executor: (resolve: (value?: ValidationErrors | PromiseLike<ValidationErrors>) => void, reject: (reason?: any) => void) => void) => Promise<ValidationErrors>


@param executor
A callback used to initialize the promise. This callback is passed two arguments: a resolve callback used resolve the promise with a value or the result of another promise, and a reject callback used to reject the promise with a provided reason or error.



*/
import { AbstractControl, ValidationErrors } from "@angular/forms";

export class customValidator {
    static noSpace(control:AbstractControl) : {[key:string]:any} | null{
        if((<string>control.value).indexOf(' ') >=0) { // <string> is the type assertion or we can say type casting.
            return {'noSpace' : true};
        } 

        return null;

    }

    static noDot(control:AbstractControl): ValidationErrors | null {
        if((<string>control.value).indexOf('.') >=0) {
            return {'noDot':true};
        }
        return null;
    }

    // implementation of promises and asyn operation.
    
    static ifUnique(control:AbstractControl) : Promise<ValidationErrors|null> {

        return new Promise((resolve,reject) => {  //this is anonymous method's body starting after fat arrow  
            setTimeout(() => {
                if(control.value === 'nitish'){ 
                    resolve({'alreadyexist': true});
                } //this key will go in errors of form cotrol object
                else
                resolve(null); //returning null
            },2000); // setTimeout method is already defined we are just calling it inside the executor method of promise and it as an asyn                 operation
        });

    }

    }
    
