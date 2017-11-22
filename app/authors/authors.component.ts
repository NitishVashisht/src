import { AuthorsService } from './../authors.service';
import {Component} from '@angular/core';

@Component({
  selector: 'authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent{

  title:string;
  authorsarray:string[];
  constructor(authorserviceobject:AuthorsService) { //dependency injection using AuthorService  

  this.title=authorserviceobject.titlevar;
  this.authorsarray=authorserviceobject.authorarray;
   }
}
