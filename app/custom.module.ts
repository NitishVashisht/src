/*
this is example of creating the custom module using @NgModule decorator to make ts class a module 
then registering our newly created pipe known as concatination pipe in declaration
array property of decorator, Then in order to use the concept we have to import this module in
our core module (app.module.ts) and then update the imports array and also we have to
 use exports property
of this module and update the value with concatinationPipe. Elements (directives,components,Pipes)
that are registered with same module can use each other with out any concept of import export
But in order to use element of some other module we need to import that module and that module 
should export that element which is registered to module
*/
import { BrowserModule } from '@angular/platform-browser';
import { concatinationPipe } from './learningpipes/concatination.pipe';
import { NgModule } from '@angular/core';



@NgModule ({

    declarations:
    [
       concatinationPipe
    ],

    exports : [concatinationPipe],
    imports: [BrowserModule]

})

export class custommodule {

}