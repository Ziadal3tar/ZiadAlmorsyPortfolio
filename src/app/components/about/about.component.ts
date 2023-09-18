import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  text: Array<String> = [
    'fullstack developer (mean)',
    'frontend developer',
    'backend developer',
    'freelancer',
  ];
  innerHtml: String = '';
  i: any = 0;
  ngOnInit(): void {
    this.innerHtml = this.text[this.i];

    this.animation();
  }

  animation() {
    setTimeout(() => {
      document.getElementById('ani')?.classList.replace('w-ani', 'w-0');
      setTimeout(() => {
        if (this.i + 1 == this.text.length) {
          this.i = 0;
        } else {
          this.i += 1;
        }
        this.innerHtml = this.text[this.i];
        document.getElementById('ani')?.classList.replace('w-0', 'w-ani');
        this.animation();
      }, 2000);
    }, 2000);
  }
}
