/*

this is first working service that i have created so far and i feel good now.

rxjs/add/operator/catch is how we can import another operators, observables with operators
are very powerful combination.

We only import the operators that we are gonna use coz it makes our application havier.
-------------------------------------------------------------------------------------------------------------------------------------
catch method is an instance method that is only available for objects of observable class.

Throw is a static method that can only be accessed through class directly thats why we are using Observable.throw, 
there other methods which are static and can be used directly through class and these are called factory methods.
facftory because these create the objects or instances of Observable class.
 
--------------------------------------------------------------------------------------------------------------------------------------
In case of asynchronus programming.

map transforms items emitted by an Observable by applying a projection function to each item whereas 

flatmap:
Applies a specified function to each emitted item and this function in turn returns an Observable for each item.
flatMap then merges all these sequences to make a new sequence.

.map(response => response.json) here fat arrow corresponds to transform 

-----------------------------------------------------------------------------------------------------------------------------------------

OBSERVABLE VS PROMISES

Observables are lazy until unless we subscribe to them nothing will happen
Promises on other hand are eager and does not have any subscribe method

Observables with combination of operators in rxjs are very powerful , like .retry() operator that tries for number of times, if call to server fails
Promises donot have operators

we can convert Observables to Promises using .toPromise() but its not advisable to do so.
But we cannot convert promises to observables

Observables have operators that can be chained together and will not do anything until unless observable is subscribe to.
this is not present in promises.

observables allows reactive programming 
promises donot do so.

both are meant for async programming.

*/
import { BadInput } from './../posts/BadInput';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/catch'; 
import 'rxjs/add/observable/throw' ;
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable' ;
import { AppErrors } from './../posts/app-errors';
import { NotFoundError } from '../posts/NotFoundError';
 

@Injectable()
  export class CrudopsService {
  constructor(private httpobject:Http) { } //

  url:string = "https://jsonplaceholder.typicode.com/posts";
  Wrongurl:string = "https://sjsonplaceholder.typicode.com/posts" ;
  read(){
  return this.httpobject.get(this.url)

  .map((response)=>response.json())/*map method transforms the values emit by source observable by applying method and returning 
  observable for each item,here we are transforming a response object to array of javascript objects*/

  .catch(this.handleerror); //returns Observable<response> and this will be subscribed or used by the subscriber of this service 
  //which is crudops.component.ts in our case and this is true for every crud operation we created here.
  }

  create(post){
     return this.httpobject.post(this.Wrongurl,JSON.stringify(post))
            .catch((err:Response)=>{
              if(err.status === 400)
              return Observable.throw (new BadInput)

                return Observable.throw(new AppErrors(err.json()))
            })
     // we are using wrong url in order to implement {provide:,useClass:} in provider array in appmodule in order to handle error globally.
  }

  delete(i){
    return this.httpobject.delete('https://jsonplaceholder.typicode.com/posts'+'/'+ i)
    .catch((err:Response)=>{
      if(err.status === 404){
      return Observable.throw(new NotFoundError());
      }
      else
      return Observable.throw(new AppErrors(err.json()));// throwing observalbe of error of type AppErrors means an instance of Apperror
    });
  }

  update_put(i,put_object:{}){

    return this.httpobject.put('https://jsonplaceholder.typicode.com/posts'+'/'+ i,JSON.stringify(put_object))
    .catch(this.handleerror);

  }

  update_patch(z,put_object:{}){
   return this.httpobject.patch(this.url+'/'+ z,JSON.stringify({isRead:true}))
   .catch(this.handleerror);
  }

  // this private method is another example of further refractoring we can use the reference to this method in our .catch operator
  //there is no need to write the same code again and again we will use this methods in Update put and patch and read.
  //return type of this method is error observable.

  private handleerror(err:Response){
    if(err.status === 404){
      return Observable.throw(new NotFoundError());
      }

    if(err.status === 400)
      return Observable.throw (new BadInput)

    return Observable.throw(new AppErrors(err.json()))

  }
}


