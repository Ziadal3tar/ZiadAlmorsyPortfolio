import { Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent {
  @Input() languageData:any
@Input() arabic:any

frontEndIcons:any[]=[
  'bi bi-speedometer',
  'fa-solid fa-wand-magic-sparkles',
  'bi bi-brush-fill',
  'bi bi-browser-firefox',
  'bi bi-phone-flip',
  'fa-solid fa-language',
  'fa-solid fa-gears',
]
backEndIcons:any[]=[
  'bi bi-hdd-network-fill',
  'bi bi-database-fill-add',
  'bi bi-bar-chart-steps',
  'bi bi-shield-fill-check',
  'bi bi-rocket-fill',
  'fa-brands fa-servicestack',
  'fa-solid fa-clock-rotate-left',
]
up:Boolean = false
frontEndServices:any
backEndServices:any
constructor(private LanguageService:LanguageService){
this.LanguageService.currentLanguageData.subscribe((data:any)=>{

this.frontEndServices = data.services.frontend
this.backEndServices = data.services.backend
})
}
ngOnInit(): void {
  this.animate()
}
animate(){
  console.log(this.up);

  setTimeout(() => {
this.up = !this.up
this.animate()
  }, 1500);
}}
