/*

Multiple custom pipes in one file example also Pipe and PipeTransform is interfaces define in 
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
         let character:string = argument;
        return value.replace(character,'*')
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