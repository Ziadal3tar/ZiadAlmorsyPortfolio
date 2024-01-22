import { Component } from '@angular/core';
import { CommonService } from './services/common.service';
import { StyleService } from './services/style.service';
import { LanguageService } from './services/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portofolio';
  constructor(public _common: CommonService,private styleService: StyleService,private _language:LanguageService) {
    this.styleService.textColor$.subscribe((color) => {
      document.documentElement.style.setProperty('--text-color', color);
    });
    this.styleService.bgColor$.subscribe((color) => {
      document.documentElement.style.setProperty('--bg-color', color);
    });
    this.styleService.bgDLbtn$.subscribe((color) => {
      document.documentElement.style.setProperty('--bgDLbtn', color);
    });
    this._language.updateLanguage(false)
  }
  ngOnInit(): void {
//     this._common.CookiesId().subscribe((data:any)=>{
// console.log(data);

//     })
  }
}
