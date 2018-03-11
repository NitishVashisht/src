/*

Code is dealing with CRUD operations and rest web service using http methods of get,create,put,patch,delete


--------------------------------------------------------------------------------------------------------------------------------------
the return type of http's methods is Observable of response like Observable<response>
here in this code we are chaining two methods but the subscribe method is of Observable<response>
below example is chaining of method calls thats why we are able to call two methods get and subscribe
subscribe method is for telling us when get method gets the data from url so that when result is ready we will be notified.
but in the mean time the execution will go on and it will not stop.
value is of type response which is a class also value uses json method to convert the response from server into json format.
json is method defined in response class.
-------------------------------------------------------------------------------------------------------------------------------------

create method is basically a post operation

Most important point to remember is while sending data to
server the data or javascript object should be in string format, so thats why we use JSON.stringyfy which is 
already defined as js object to convert any type of object even arrays into string

-------------------------------------------------------------------------------------------------------------------------------------
push and splice methods are defined for arrays
this.posts.splice(0,0,post) it is one type of overhead it can have another type of overhead as well means there 
are two ways to use splice method with diff set of arguments.

-----------------------------------------------------------------------------------------------------------

 this.posts = value.json();// value is of type response which is returning an array of objects as in jsonplacceholder.typicode.com/posts
      //contains an array of 100 items and then .json method is parsing that json array and storing it in posts array

------------------------------------------------------------------------------------------------------------------------------------------

The url in put,patch and delete methods are different compare to other operation because we cannot do such operations on entire collection
of objects,so we have to choose a single object to implement these operations thats why we appended '/' and i.id(that contains id number of 
object ).

Create :            create (with body) with this we can add a new post 
Get :               read (no body required) we can get the full collection of posts and then can store it in array
Put and patch :     update() works on speccific post or information, PUT is used to update the full layout of object
                    Patch is used if we want to update a couple of properties of object.
delete:             delete is used to delete a specific post cannot delete the full collections of post and nobody is required.

------------------------------------------------------------------------------------------------------------------------------------------

Other point to note down is the argument type of subscribe method which are having 3 overheads means three different type of subscribe methods
are present.

------------------------------------------------------------------------------------------------------------------------------------------

ngOninit is a life cycle hook which is defined in Oninit interface there are so many others but in order to use it we need not to necessarily
implement interface its just for compile time checking but implementing is the best practice.

Constructor of component should be light according to the programming aspects so we should use ngOninit method for initializing .

-----------------------------------------------------------------------------------------------------------------------------------------------

Separation of concerns:-

What is happening here is that we have only one class to implement the view logic and as well as we are making the http calls in this class
only which is not a good practice a component is only meant for view logic we should not use the same for making http calls

There are two problems in this 
1. we can in future use the functionality of these crud operations in some other pages so we cannot write same code for them again and again,
2. If by chance the url changes then we have to change that url in multiples places when our application starts scaling
3. when we are testing it there should be server up and running otherwise unit test can fail also these http calls slows down the testing

So there should present the concept of service which takes care of all these three issues also service is achieving the concept of encapsulat
ion.

here we will create new component named :- crudops.component.ts and we will use crudops.service.ts

*/
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit{
  public postsarray:any[]; //cannot declare it in constructor because we are not creating an injection for the same.
  url:string = "https://jsonplaceholder.typicode.com/posts";
  constructor(private httpobject:Http) {} //dependency injection of Http object.

  ngOnInit(){
  this.httpobject.get('https://jsonplaceholder.typicode.com/posts').subscribe((value)=>{
    this.postsarray = value.json();// value is of type response which is returning an array of objects as in 
    //jsonplacceholder.typicode.com/post contains an array of 100 items and then .json method is parsing that json array 
    //and storing it in posts array
  }) }

   create(input:HTMLInputElement){ //binded with event keyup.enter
   let post = {title:input.value};
    this.httpobject.post('https://jsonplaceholder.typicode.com/posts',JSON.stringify(post))
    .subscribe(response=>{
      //this.posts.push(post); // this will push the post element into the last
      //console.log(response.json()); 
      //post['id'] = response.json().id;
      //console.log(response);
      this.postsarray.splice(0,0,post);
      input.value = '';
    })
   }

 // binding it with button and by defination delete method donot take any body as 2nd parameter.
   delete(i:HTMLInputElement){
    this.httpobject.delete('https://jsonplaceholder.typicode.com/posts'+'/'+ i.id).subscribe((response)=>{
    let index = this.postsarray.indexOf(i); // becoz array works on index only
    this.postsarray.splice(index,1);
    })
  }

  update_put(i:HTMLInputElement){
    let put_object = {isRead:true,
      userId: 1,
      id: 1,
      title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "I am awsome"
    };
    this.httpobject.put('https://jsonplaceholder.typicode.com/posts'+'/'+ i.id,JSON.stringify(put_object))
    .subscribe((response)=>{
      console.log(response.json());
    });
  }

  update_patch(i:HTMLInputElement){
    let patch_object = {isRead:true};
    this.httpobject.put(this.url+'/'+ i.id,JSON.stringify({isRead:true}))
    .subscribe((response)=>{
      console.log(response.json());
    });
  }

  }
