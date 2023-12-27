import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  dd = 'topright';
  @Output() changeTap: EventEmitter<any> = new EventEmitter<any>();

  constructor(private _common: CommonService,private _Router:Router) {}

  ngOnInit(): void {
    this.play();
  }

  play(): any {
    let shkl1 = <HTMLInputElement>document.getElementById('shkl1');
     shkl1.classList.replace('shkl1', 'shkl12');
    let shkl2 = <HTMLInputElement>document.getElementById('shkl2');
     shkl2.classList.replace('shkl2', 'shkl22');
    let imageP = <HTMLInputElement>document.getElementById('imageP');
    let doc = <HTMLInputElement>document.getElementById('doc');
    imageP.style.marginTop = '0';
    setTimeout(() => {
       shkl1.classList.replace('shkl12', 'shkl1');
       shkl2.classList.replace('shkl22', 'shkl2');
      imageP.style.marginTop = '160%';
      setTimeout(() => {
         shkl1.classList.replace('shkl1', 'shkl13');
        doc.style.marginLeft = '-10px';
        setTimeout(() => {
           shkl1.classList.replace('shkl13', 'shkl1');
          doc.style.marginLeft = '100%';
          setTimeout(() => {
            this.play();
          }, 500);
        }, 3000);
      }, 500);
    }, 3000);
  }
  toPdf(){
    window.open('https://res.cloudinary.com/dqaf8jxn5/image/upload/v1703694145/ZiadalmorsyResume_qhie3m.pdf')
  }
  click(tap:any){
  this.changeTap.emit(tap);

  }
}
