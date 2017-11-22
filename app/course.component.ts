import { CourseService } from './course.service';
import {Component} from '@angular/core' ;

@Component({
    selector:'courses',
    template:
    `
    <div id="FirstId">
        <h2> {{"Title of component:" + title}} </h2>
        <ul>
            <li *ngFor = "let i of coursesarray" > 
            {{i}}
            </li>
        </ul>
    </div>
    <div id = "SecondId">
        <h2>{{"Title of service:" + titlex}}</h2>
        <ul>
            <li *ngFor = "let i of coursesx" > 
            {{i}}
            </li>
        </ul>
    </div>
    `
})
export class CourseComponent {

    title:string = "List of courses";
    coursesarray = ["Course 1","Course 2","Course 3"];
    titlex:string;
    coursesx:string[];   
    constructor(serviceobject : CourseService){ // dependency injection for that we have to tell app module
        this.titlex = serviceobject.titlevar;
        this.coursesx = serviceobject.getListInService();
    }

 getList():string{
    return this.title;
 }
}


/*

this is a simple component,component consists of class template and decorator
decorator adds a meta data to class to make it component. Component consists of various properties
example selector,directives,template,templateUrl etc.

To tell angular about the newly created component we have to register it with app.module.ts

*/

/*dependency injection for that we have to tell app module that component will be having dependencies
and for that we have to update provider array in @ngmodule decorator its kind of registering 
component in module but little different import statements are same as that of components,but the only
difference is property in component registeration we use declarations array but in service we use
provider array

Also we are passing an object variable of service in constructor as parameter means its a dependency
injection we are injeccting dependency of component class on service class but it is not tightly 
coupled.

If there are 50 components of same module are dependent upon service then angular willnot create
50 instances ther will be only one instance and that instance will be usedd by all components
this is called as singleton pattern

during the constructor call of courses component an instance of service will be created by angular
as components is having dependency we need not to create the instance by ourselves.
*/
