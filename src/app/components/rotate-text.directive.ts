// rotate-text.directive.ts
import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appRotateText]'
})
export class RotateTextDirective implements OnInit {
  @Input() rotateArray: string[] = [];
  @Input() rotatePeriod: number = 1200;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.initRotateText();
  }

  private initRotateText(): void {
    const element = this.el.nativeElement;
    const toRotate = this.rotateArray;
    const period = this.rotatePeriod;

    if (toRotate) {
      this.tick(element, toRotate, period);
    }
  }

  private tick(element: HTMLElement, toRotate: string[], period: number): void {
    let loopNum = 0;
    let txt = '';
    let isDeleting = false;

    const tick = () => {
      const i = loopNum % toRotate.length;
      const fullTxt = toRotate[i];

      if (isDeleting) {
        txt = fullTxt.substring(0, txt.length - 1);
      } else {
        txt = fullTxt.substring(0, txt.length + 1);
      }

      element.innerHTML = '<p class="rotateText">I`m <span class="wrap">' + txt + '</span></p>';

      let delta = 150 - Math.random() * 100;

      if (isDeleting) {
        delta /= 2;
      }

      if (!isDeleting && txt === fullTxt) {
        delta = period;
        isDeleting = true;
      } else if (isDeleting && txt === '') {
        isDeleting = false;
        loopNum++;
        delta = 500;
      }

      setTimeout(() => {
        tick();
      }, delta);
    };

    tick();
  }
}
