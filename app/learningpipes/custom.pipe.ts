/*

Multiple custom pipes in one file example also Pipe and PipeTransform are interfaces defined in 
angular core library pipe decorator can have two properties one is Name: string other Pure?:boolean

*/
import {Pipe,PipeTransform} from '@angular/core';

@Pipe({
    name: 'stars'
})

export class starpipe implements PipeTransform{

    transform(value:any, argument?:string) { //overriding method of interface

        if(!value){
            return value;
        }
        return value.replace(argument,'*')
    }

}

@Pipe({

    name: 'summary' ,
    pure: true
})

export class summarypipe implements PipeTransform{

    transform(value:any, argument?:number) { //overriding method of interface

        if(!value){
            return value;
        }

        let a = argument;
        return (value.substr(0,a) + '...');
    }
}

@Pipe({
    name: 'casings'
})

export class titlecasePipe implements PipeTransform{
    transform (value:string,arg:string):any{
        if(!value){
            return value;
        }

        else if(arg=='U'){ //for uper casing
            return (value.toLocaleUpperCase()); }

        else if(arg=='L'){ //for lower casing 
                return (value.toLocaleLowerCase());

        // i have to add other casings as well like title casing 
        }

    }
}
