import { Component, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'native',
	template: `
	  <p class="hello other-hello">
	    Hello World
	  </p>`,
	styles: [` .hello { color: red ;font-weight: bold; } `],
	encapsulation: ViewEncapsulation.Native
})
export class NativeComponent {
  name = 'World';
}