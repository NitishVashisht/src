import { Component, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'emulated',
	template: `
	  <p class="hello other-hello">
      Hello World
    </p>`,
	styles: [`
    .hello { color: green; }	  
	`],
	encapsulation: ViewEncapsulation.Emulated
})
export class EmulatedComponent {
  name = 'World';
}
