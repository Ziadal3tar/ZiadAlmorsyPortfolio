import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  isOpen:Boolean = false
  tap:any='header'
  constructor(private router : Router,private viewportScroller: ViewportScroller){}

  // navigateToSection(sectionId: string): void {
  //   console.log('GF');

  //   this.router.navigate([], {

  //     fragment: sectionId,
  //     // Add other options as needed
  //   });}
  scrollToSection(sectionId: string): void {
    const targetElement = document.getElementById(sectionId);

    if (targetElement) {
      const targetPosition = targetElement.offsetTop;
      const currentPosition = this.viewportScroller.getScrollPosition()[1];
      const distance = targetPosition - currentPosition;
      const duration = 1000; // 5 seconds

      let startTime: number;

      const animateScroll = (currentTime: number) => {
        if (!startTime) {
          startTime = currentTime;
        }

        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        const easing = this.easeInOutQuad(progress);

        this.viewportScroller.scrollToPosition([0, currentPosition + distance * easing]);

        if (timeElapsed < duration) {
          requestAnimationFrame(animateScroll);
        }
      };

      requestAnimationFrame(animateScroll);
    }
  }

  private easeInOutQuad(t: number): number {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  }
}

