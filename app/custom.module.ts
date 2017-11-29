import { concatinationPipe } from './learningpipes/concatination.pipe';
import { NgModule } from '@angular/core';

@NgModule ({

    declarations:
    [
       concatinationPipe
    ],

    exports : [concatinationPipe]

})

export class custommodule {

}