/*

This the best example where we are taking care of query optional params and our stock params so we are getting 
back two observables but of same kind as can be seen in the class defination we are getting back ParamMap in both the cases
then there is no point in having multiple data steams opened for same type of observable so we can combine them or merge them into 
the one data stream and one observable so for that we have to use rxjs library again.
combieLatest method is having 18 overheads.

Here we will provide combine latest with array of observables but we have get them not to mention them.

*/

import { Component, OnInit } from '@angular/core';
import { GitServiceService } from '../services/git-service.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/Observable/combineLatest'; // its a factory static method defined on Observable class.


@Component({
  selector: 'git-component',
  templateUrl: './git-component.component.html',
  styleUrls: ['./git-component.component.css']
})

export class GitComponentComponent implements OnInit {
  followers: any[];
  constructor(private service:GitServiceService,private route:ActivatedRoute) { } // two dependency injections

  ngOnInit() {
    this.service.getAll()
    .subscribe(Response =>{
      this.followers = Response;
    });

    this.route.queryParamMap.subscribe(params=>{ // query param map is used when we want to capture the optional query
                                                  // parameters the parameters that comes after ? in web address are considered as query params

      let value = params.get('');
    });

    this.route.paramMap.subscribe(params=>{ //normal parameters and subscribing to Observable of ParamMap.
      let value = params.get('');
    });
  
    Observable.combineLatest([
      this.route.queryParamMap,
      this.route.paramMap
    ])
    .subscribe(Combined =>{
      let page = Combined[0].get('page');
      let id =Combined[1].get('id');

      // we can even embed this functionality to get data from api and then subscribing to it inside the subscription but now we see two  
      //subscribes subscribe within subscribe in ths case we can use .switchMap
      this.service.getAll() // returning of observable<any> because of .JSON in map operator
        .subscribe(Response =>{
        this.followers = Response;
    });
  })
}
}

