/*
AppError is parent class of this class and we have created this class just to create an observable
using Observable.throw static method of this class so that while cosuming the service the component
will have error handling by only using the instance of this class contrary using error : Response.
*/
import { AppErrors } from './app-errors';

export class BadInput extends AppErrors{

}