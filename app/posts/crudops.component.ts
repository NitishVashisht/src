
/*
this component along with service crudops.service.ts implements the concept of separation of concerns.
error handling is very important concept there are only two types of errors.

1. Expected errors like 404 not available,400 bad request
2. Unexpected error like unhandled exeptions, server is down, network is down

in order to achieve example of 404
this.crudops.delete(345).subscribe((response) we are passing 345 id of post which is not available so error of non availability will come
-----------------------------------------------------------------------------------------------------------------------------------------

now for the refactoring and to handle erros globally we will change the value of url in our service and also we will tell our appmodule to use
custom class insted of using default inbuilt ErrorHandler class in Provider array using an object having two properties as{provide:,useClass:}

providers: [ {provide:ErrorHandler,useClass:CustomClass} ] the meaning of this code is telling angular to use CustomClass irrespect of 
ErrorHandler class which is responsible to catch unexpected exceptions.

--------------------------------------------------------------------------------------------------------------------------------------------

Class a extends b;

constructor(httpobject:http){

  super(httpobject);

}

in inheritence in order to create instance of derived class first we have to create instace of base class thats why we use super() as in uper
example, we have to call super as method passing argument.

---------------------------------------------------------------------------------------------------------------------------------------------

So what's the exact difference between map and flatMap:

map transforms items emitted by an Observable by applying a function to each item whereas 

flatmap:
Applies a specified function to each emitted item and this function in turn returns an Observable for each item.
flatMap then merges all these sequences to make a new sequence.

---------------------------------------------------------------------------------------------------------------------------------------------
*/
import { AppErrors } from './app-errors';
import { CrudopsService } from './../services/crudops.service';
import { Component, OnInit } from '@angular/core';
import { NotFoundError } from './NotFoundError';

@Component({
  selector: 'app-crudops',
  templateUrl: './crudops.component.html',
})
export class CrudopsComponent implements OnInit{
  public postsarray:any[]; //cannot declare it in constructor because we are not creating an injection for the same.
 
  constructor(private crudops:CrudopsService) {} //dependency injection of object of service.

  ngOnInit(){
  this.crudops.read().subscribe(value=>{
    this.postsarray = value; 
 })}

   create(input:HTMLInputElement){ //binded with event keyup.enter
   let post = {title:input.value};
    this.crudops.create(post)
    .subscribe(response=>{
      this.postsarray.splice(0,0,post);
      input.value = '';
    })
   }

 // binding it with button and by defination delete method donot take any body as 2nd parameter.
   delete(i:HTMLInputElement){
    let z = i.id;
    this.crudops.delete(345).subscribe((response)=>{ // we hardcoded the value of i so that it has to delete post with id 345 whcih does not exist
    let index = this.postsarray.indexOf(i); // becoz array works on index only
    this.postsarray.splice(index,1);
    },(error:AppErrors)=>{
        if(error instanceof NotFoundError) // checking if error is instance of Class NotFoundError, which will only be present if catch method catches
        // the error of type of instance of class response if yes then it will throw an observable of type either NotFoundError or AppError.
        alert('post is not available');
    })
  }

  update_put(i:HTMLInputElement){
     let z=i.id;
    let put_object = {isRead:true,
      userId: 1,
      id: 1,
      title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "I am awsome"
    };
    this.crudops.update_put(z,put_object)
    .subscribe((response)=>{
      console.log(response.json());
    });
  }

  update_patch(i:HTMLInputElement){
    let z=i.id;
    let patch_object = {isRead:true};
    
    this.crudops.update_patch(z,patch_object).subscribe((response)=>{
      console.log(response.json());
    });
  }

  }
