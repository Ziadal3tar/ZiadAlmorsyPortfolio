import { Router } from '@angular/router';
import { Component, EventEmitter, Output } from '@angular/core';
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
  @Output() open = new EventEmitter<void>();

  isOpen = false;
  dark = true;
  arabic = false;
  languageData: any;
  color = '#fff';
  code = 0;
  lastClickTime = 0;
  timeoutId: any;
  passwordTap = false;
  password = '';

  constructor(
    private viewportScroller: ViewportScroller,
    private styleService: StyleService,
    private language: LanguageService,
    private common: CommonService,
    private router: Router
  ) {
    this.language.currentLanguageData.subscribe((data) => (this.languageData = data));
  }

  ngAfterViewInit(): void {
    this.color = '#000';
  }

  dlAnimate(): void {
    const div = document.getElementById('btnDL');
    if (!div) return;

    const seq = ['dAnimate', 'lAnimate'];
    seq.forEach((cls, i) => {
      setTimeout(() => {
        div.classList.toggle(cls);
      }, i * 200);
    });
  }

  scrollToSection(sectionId: string): void {
    const target = document.getElementById(sectionId);
    if (!target) return;

    const start = this.viewportScroller.getScrollPosition()[1];
    const distance = target.offsetTop - start;
    const duration = 800;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const ease = progress < 0.5 ? 2 * progress ** 2 : -1 + (4 - 2 * progress) * progress;
      this.viewportScroller.scrollToPosition([0, start + distance * ease]);
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }

  changeLang(): void {
    if (this.code >= 5) {
      this.passwordTap = true;
      this.code = 0;
      return;
    }
    this.arabic = !this.arabic;
    this.language.updateLanguage(this.arabic);
  }

  changeMood(): void {
    this.dark = !this.dark;
    this.color = this.dark ? '#fff' : '#000';
    this.styleService.setTextColor(this.color);
    this.styleService.setBgColor(this.dark ? '#171717' : '#e9dddd');
    this.styleService.setBgDLbtn(this.dark ? '#e7902e' : '#000');
  }

  changeCode(): void {
    const now = Date.now();
    this.code = now - this.lastClickTime < 1000 ? this.code + 1 : 0;
    this.lastClickTime = now;
    clearTimeout(this.timeoutId);
    this.timeoutId = setTimeout(() => (this.timeoutId = null), 1000);
  }
go(): void {
  this.common.open(this.password).subscribe((res: any) => {
    if (res.open) {
     this.router.navigate([`/open/${this.password}`]);
    } else {
      alert('Incorrect password');
    }
  });
}
}
