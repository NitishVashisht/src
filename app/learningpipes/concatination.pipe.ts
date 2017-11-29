//Example of pipe 
import { Pipe,PipeTransform } from '@angular/core';

@Pipe({
    name:'concat'
})

export class concatinationPipe implements PipeTransform {

    transform(value:string , arg?: string ){
         if(!value){
             return value;
         }

         return (value+'_'+arg);
    }

}
