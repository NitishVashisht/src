import { Component, OnInit } from '@angular/core';
import { GitServiceService } from '../services/git-service.service';

@Component({
  selector: 'git-component',
  templateUrl: './git-component.component.html',
  styleUrls: ['./git-component.component.css']
})
export class GitComponentComponent implements OnInit {
  followers: any[];
  constructor(private service:GitServiceService) { }

  ngOnInit() {
    this.service.getAll()
    .subscribe(Response =>{
      this.followers = Response;
    })
  }

}
