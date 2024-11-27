import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { StyleService } from 'src/app/services/style.service';
import { LanguageService } from 'src/app/services/language.service';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  isOpen: Boolean = false;
  dark: Boolean = true;
  arabic: Boolean = false;
  @Output() open: EventEmitter<any> = new EventEmitter<any>();

  tap: any = 'header';
  languageData: any;
  color: any = '#fff';
  code: any = 0;
  lastClickTime: any = 0;
  timeoutId: any;
  passwordTap: Boolean = false;
  password: any;

  constructor(
    private router: Router,
    private viewportScroller: ViewportScroller,
    private styleService: StyleService,
    private _language: LanguageService,
    private _common: CommonService
  ) {
    this._language.currentLanguageData.subscribe((data: any) => {
      this.languageData = data;
    });
    this.code = 0;
    this.lastClickTime = 0;
    this.timeoutId = null;
  }
  ngOnInit(): void {}
  ngAfterViewInit(): void {
    this.color = '#000';
  }
  dlAnimate() {
    let div = document.getElementById('btnDL');
    div?.classList.add('dAnimate');
    setTimeout(() => {
      div?.classList.add('lAnimate');
      div?.classList.remove('dAnimate');
      setTimeout(() => {
        div?.classList.add('dAnimate');
        div?.classList.remove('lAnimate');
        setTimeout(() => {
          div?.classList.add('lAnimate');
          div?.classList.remove('dAnimate');
          setTimeout(() => {
            div?.classList.remove('lAnimate');
          }, 200);
        }, 150);
      }, 100);
    }, 50);
  }

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

        this.viewportScroller.scrollToPosition([
          0,
          currentPosition + distance * easing,
        ]);

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
  changeLang() {
    if (this.code == 5) {
      this.passwordTap = true;
      this.code = 0;
    } else {
      this.arabic = !this.arabic;
      this._language.updateLanguage(this.arabic);
    }
  }
  changeMood() {
    if (!this.dark) {
      this.color = '#000';
    } else {
      this.color = '#fff';
    }
    this.dark = !this.dark;

    if (this.dark) {
      this.styleService.setTextColor('#fff');
      this.styleService.setBgColor('#171717');
      this.styleService.setBgDLbtn('#5692cd');
    } else {
      this.styleService.setTextColor('#000');
      this.styleService.setBgColor('#e9dddd');
      this.styleService.setBgDLbtn('#000');
    }
  }
  changeCode() {
    const currentTime = Date.now();
    const timeSinceLastClick = currentTime - this.lastClickTime;

    if (timeSinceLastClick < 1000) {
      // Increment code if less than 1 second has passed since last click
      this.code++;
    } else {
      // Reset code to 0 if 1 second or more has passed since last click
      this.code = 0;
    }

    this.lastClickTime = currentTime;

    // Clear the previous timeout if it exists
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }

    this.timeoutId = setTimeout(() => {
      this.timeoutId = null; // Reset the timeout ID after execution
    }, 1000);
  }
  go() {
    this._common.open(this.password).subscribe((data: any) => {
      if (data.open) {
        this.open.emit('true');
      }
    });
  }
}
