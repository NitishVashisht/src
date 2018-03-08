/*

Code is dealing with CRUD operations and rest web service using http methods of get,create,put,patch,delete


--------------------------------------------------------------------------------------------------------------------------------------
the return type of http's get method is Observable of response like Observable<response>
here in this code we are chaining two methods but the subscribe method is of Observable<response>
below example is chaining of method calls thats why we are able to call two methods get and subscribe
subscribe method is for telling us when get method gets the data from url so that when result is ready we will be notified.
value is of type response which is an interface also value uses json method to convert the response from server into json format.
json is method of response.
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

*/
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent{
  public posts:any[]; //cannot declare it in constructor because we are not creating an injection for the same.

  constructor(private httpobject:Http) { //dependency injection of Http object.
    
    this.httpobject.get('https://jsonplaceholder.typicode.com/posts').subscribe((value)=>{
      this.posts = value.json();// value is of type response which is returning an array of objects as in jsonplacceholder.typicode.com/posts
      //contains an array of 100 items and then .json method is parsing that json array and storing it in posts array
    })
   }

   create(input:HTMLInputElement){
   let post = {title:input.value};
    this.httpobject.post('https://jsonplaceholder.typicode.com/posts',JSON.stringify(post))
    .subscribe(response=>{
      //this.posts.push(post); // this will push the post element into the last
      console.log(response.json()); 
      //post['id'] = response.json().id;
      //console.log(response);
      this.posts.splice(0,0,post)
      input.value = '';
    })
   }

}
