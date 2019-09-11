import { Directive, ElementRef, HostListener, Renderer2, HostBinding } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {

    //@HostBinding('class.open') 
    opened = false;

    constructor(private elRef: ElementRef, private renderer: Renderer2) {}

    @HostListener('click') onMouseClick() {
        if (this.opened)
            this.renderer.removeClass(this.elRef.nativeElement, 'open');
        else
            this.renderer.addClass(this.elRef.nativeElement, 'open');
        
        this.opened = !this.opened;
    }

}