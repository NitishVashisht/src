import { Component } from '@angular/core';

@Component({
    selector: 'impl-directives', 
    templateUrl: './implementation.component.html'
    
})

export class implementationComponent{
    truthy:Boolean = true;
    falsy:Boolean = false;
    view = "map";
}

