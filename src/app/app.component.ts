import { Component } from '@angular/core';
import { CommonService } from './services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portofolio';
  constructor(public _common: CommonService) {

  }
  ngOnInit(): void {
//     this._common.CookiesId().subscribe((data:any)=>{
// console.log(data);

//     })
  }
}
