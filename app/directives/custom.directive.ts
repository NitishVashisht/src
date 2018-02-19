import { Directive,HostListener,ElementRef,Input } from "@angular/core"

@Directive({
    selector : '[customdirective]'
})

export class customDirective{
    constructor( private elobj :ElementRef){}
    value: string;
    @Input('customdirective') format:string;
    @HostListener('click') onkeyup(){
        this.value = this.elobj.nativeElement.value;
        if(this.format == 'lower'){
            this.elobj.nativeElement.value = this.value.toLowerCase();
        }
        else 
            this.elobj.nativeElement.value = this.value.toUpperCase();
    }

}

