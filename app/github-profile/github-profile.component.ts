/*

ActivatedRoute is inbuilt service defined in angular router package that is being injected here so that 
we can use the arguments defined in angular routes in our app module.

paramMap method will return observable of ParamMap to which we can subscribe.

----------------------------------------------------------------------------------------------------------------------

Why route parameters are observables in nature, because in case why we are routing from one page to the same page but at different place
means hopefully we are landing to same component then angular does not destroy this component but if control is routing from component a t b
then angular will destroy the component a and will take out its traces from dom and will insert component b's template to dom.

So in this particular use case we have same component but different route parameters so angular will not destroy it and will keep it in dom
thats why route parameters are observables so that whenever there is a change it can be subscribed to.
<button class = "btn btn-default" [routerLink] = "['/followers',1234]">same here</button>
this in this component's html template shows that we are travelling back to same component but different userid so our component
will not be destroyed.

-------------------------------------------------------------------------------------------------------------------------------------------------

an observable is technically a collection of async data that arrives over time.
observales can be modeled to handle streams of data so when data comes in streams then anyone subscribed to this observable is notified.
the subscribers are observer of observable.

---------------------------------------------------------------------------------------------------------------------------------------------------

for the efective search engine optimization we can use a technique of having more than one route parameters .

-------------------------------------------------------------------------------------------------------------------------------------------------

We can also bind the functionality of any event like clicking the button to the routing like in the given example we have submit method that
has been binded to button to perform a task programatically not using only view.

we have to inject Router class and then we have to use the navigate method by passing two arguments
1. Array of route and along with route params


*/
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {
  
  constructor(private rout:ActivatedRoute,private router:Router) {}
  id:number;
  name:string;

  ngOnInit() {

    //here snapshot is type of object of ActivatedRouteSnapshot and paramMap is an object of type ParamMap
    //snap shot can also be used instead of observable but in this case when contol goes back to previous route and comes back to present one
    // the present component will be reinitiated and dom will be altered again. so in this case obserrvables are beneficial.

    let snapshotid = this.rout.snapshot.paramMap.get('userid');
    console.log(snapshotid);


    this.rout.paramMap        //paramMap is the property that gives all the parameters of this route
    .subscribe((params)=>{ //whenever there is a new route parameter the component which is observer will be notified
      console.log(params);
      this.id = +params.get('userid'); // +sign converts the string value to number frequently used in js 
      this.name =params.get('username');
      console.log(this.id);
      
    })  
  }

  submit(){
    this.router.navigate(['/followers',this.id,this.name],{queryParams : {page:2,order:'newest'}});
    // navigate method took from github-profile's template to the route we gave it as a parameter along with query params(which are optional)
    // has we given the wrong route which is not present then '**' would have executed.
    // we can even use dynamic programming by capturing id and name from obserrvable of ParamMap ans subscribing just for an example.
  }


}
