/*
class containing application specific errors, it will act as a parent class and superset of errors

*/
export class AppErrors{
    constructor(public originalerror?: any){}
}