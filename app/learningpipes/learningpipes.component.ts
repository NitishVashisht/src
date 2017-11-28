/* 
  example of implementation of inbuilt pipes
  there are some pipes that can take arguments as well like number pipe for decimal places 
  in number pipe '2.2-2' means there will be two digits before decimal and after decimal
  minimumdigits-maximumdigits means in given case of 2.2-2 it will be max and min two digits after
  decimal.Simple number pipe without any arguments only make number look little good by implementing
  comma.currency pipe has a very good application suppose if we give argument as INR it will show
  INR 19000.00 by default its USD but if we give any random letters that are not a currency then it
  will not show any thing ,in console we wil get an error saying( LearningpipesComponent.html:6ERROR
  RangeError: Invalid currency code: IN
  at new NumberFormat (native) )
  currency pipe can take multiple arguments like {{pip.salary|currency:'INR':true}} so true means 
  if we want to show currency symbol yes we do .but in case currency code will not be present only 
  symbol will be there also we can supply third argument that is again decimal point one.
  In case of date we can use date pipe along with argument which will be format of date there are 
  so many formats of date that can be checked on angular website
  For percent pipe two arguments can be given first is as same as decimal also we have to use number 
  divide by 100 every time we want to take percentage.
  marks : .75, output will be 75%

*/
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'learningpipes',
  templateUrl: './learningpipes.component.html',
  
})
export class LearningpipesComponent{

pip={
  salary: 19000,
  name : 'NitisH_VashishT' ,
  marks : .75,
  pivalue: 4.245678,
  date: new Date(2017,10,24)
}
}
