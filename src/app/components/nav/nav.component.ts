import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { StyleService } from 'src/app/services/style.service';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  isOpen:Boolean = false
  dark:Boolean = true
  arabic:Boolean = false
  tap:any='header'
  languageData:any
  color:any = '#fff'
  constructor(private router : Router,private viewportScroller: ViewportScroller,private styleService: StyleService,private _language : LanguageService){
    this._language.currentLanguageData.subscribe((data:any)=>{
      this.languageData = data


    })
  }
ngOnInit(): void {
}
ngAfterViewInit(): void {
  this.color = '#000'

}
dlAnimate(){
  let div = document.getElementById('btnDL')
  div?.classList.add('dAnimate')
  setTimeout(() => {
    div?.classList.add('lAnimate')
    div?.classList.remove('dAnimate')
setTimeout(() => {
  div?.classList.add('dAnimate')
    div?.classList.remove('lAnimate')
    setTimeout(() => {
      div?.classList.add('lAnimate')
      div?.classList.remove('dAnimate')
setTimeout(() => {
  div?.classList.remove('lAnimate')

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
  changeLang(){
    this.arabic = !this.arabic
    this._language.updateLanguage(this.arabic)

  }
  changeMood(){
if (!this.dark) {
  this.color = '#000'
}else{
  this.color = '#fff'
}
this.dark = !this.dark

    if (this.dark) {
      this.styleService.setTextColor('#fff');
      this.styleService.setBgColor('#171717');
      this.styleService.setBgDLbtn('#c70039');

    }else{

      this.styleService.setTextColor('#000');
      this.styleService.setBgColor('#baa9a9');
      this.styleService.setBgDLbtn('#fff');

    }
  }
  // dnone(){
  //   document.getElementById()?.style.::After.display = 'none'
  // }
}

