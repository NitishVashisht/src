/*

Derive class has to implement super() of parent class in constructor

*/

import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Http } from '@angular/http';

@Injectable()
export class GitServiceService extends DataService {

  constructor(http:Http) { 

    super('https://api.github.com/users/mosh-hamedani/followers',http);

  }
}
