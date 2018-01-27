import { Component, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'none',
	template: `
	  <p class="hello other-hello">
	    Hello World
	  </p>`,
	styles: [`
    .other-hello {
      color: white;
      background-color: gray;
      padding: 5px;
    }	  
	`],
	encapsulation: ViewEncapsulation.None
})
export class NoneComponent {
  name = 'World';
}