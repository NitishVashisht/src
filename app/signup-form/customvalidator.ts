/*

ValidationErrors is a type defined as , its an object with 'key' : value pair/pairs

type ValidationErrors = {
    [key: string]: any;
}; 

So we can either use ValidationErrors or [key: string]: any as return type either of them is fine
Here Key plays an ipmortant role it will directly get embedded in errors property
of FormGroup this errors propert contains all errors for example required ,minlength and now noSpace
noDot.

With importing ValidationErrors we can use simply {[key:string]:any} as return type of our static methods

*/
import { AbstractControl, ValidationErrors } from "@angular/forms";

export class customValidator {
    static noSpace(control:AbstractControl) : {[key:string]:any} | null{
        if((<string>control.value).indexOf(' ') >=0) { // <string> is the type assertion or we can say type casting.
            return {noSpace : true};
        } 

        return null;

    }
    static noDot(control:AbstractControl): ValidationErrors | null {
        if((<string>control.value).indexOf('.') >=0) {
            return {noDot:true};
        }
        return null;

    }
    
}