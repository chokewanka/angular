import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[appHover]'
})
export class HoverDirective{

    constructor(private el: ElementRef) {
        console.log(el);
    }

    @HostListener('mouseenter')
    onMouseEnter(){
        this.highlight('green');
    }

    @HostListener('mouseleave')
    onMouseLeave(){
        this.highlight(null);
    }

    private highlight(color: string){
        this.el.nativeElement.style.backgroundColor = color;
    }
}