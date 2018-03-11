//Error handler is getting used in so many places by default by angular.so in oreder to overright it we have to use below code.
//providers: [ {provide:ErrorHandler,useClass:CustomClass} ] the meaning of this code is telling angular to use CustomClass irrespect of 
//ErrorHandler class which is responsible to catch unexpected exceptions.


import { ErrorHandler } from "@angular/core"; // ErrorHandler is inbuilt class to catch unexpected exceptions globally

export class CustomErrorHandler implements ErrorHandler{
    handleError(error:any){
        alert('An unexpected error occured');
        console.log(error);
    }
}