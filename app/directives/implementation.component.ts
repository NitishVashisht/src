import { Component } from '@angular/core';

@Component({
    selector: 'impl-directives', 
    templateUrl: './implementation.component.html'
    
})

export class implementationComponent{
    truthy:Boolean = true;
    falsy:Boolean = false;
    view = "map";
    subjects = [
    {name:'maths',marks:95,percentage:'95%'},
    {name:'sst',marks:85,percentage:'85%'},
    {name:'sci',marks:90,percentage:'90%'}
    ]
}

