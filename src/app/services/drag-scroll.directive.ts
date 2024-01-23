import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDragScroll]'
})
export class DragScrollDirective {
  private isDragging = false;
  private startX = 0;
  private scrollLeft = 0;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent): void {
    this.isDragging = true;
    this.startX = event.pageX - this.el.nativeElement.offsetLeft;
    this.scrollLeft = this.el.nativeElement.scrollLeft;
    this.renderer.setStyle(this.el.nativeElement, 'cursor', 'grabbing');
  }

  @HostListener('document:mouseup')
  onMouseUp(): void {
    this.isDragging = false;
    this.renderer.setStyle(this.el.nativeElement, 'cursor', 'grab');
  }

  @HostListener('document:mouseleave')
  onMouseLeave(): void {
    this.isDragging = false;
    this.renderer.setStyle(this.el.nativeElement, 'cursor', 'grab');
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    if (!this.isDragging) return;
    const x = event.pageX - this.el.nativeElement.offsetLeft;
    const walk = (x - this.startX) * 3;
    this.el.nativeElement.scrollLeft = this.scrollLeft - walk;
  }
}
