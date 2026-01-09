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

  frontEndIcons = [
    'bi bi-speedometer',
    'fa-solid fa-wand-magic-sparkles',
    'bi bi-brush-fill',
    'bi bi-browser-firefox',
    'bi bi-phone-flip',
    'fa-solid fa-language',
    'fa-solid fa-gears',
  ];

  backEndIcons = [
    'bi bi-hdd-network-fill',
    'bi bi-database-fill-add',
    'bi bi-bar-chart-steps',
    'bi bi-shield-fill-check',
    'bi bi-rocket-fill',
    'fa-brands fa-servicestack',
    'fa-solid fa-clock-rotate-left',
  ];

  frontEndServices: any[] = [];
  backEndServices: any[] = [];

  constructor(private languageService: LanguageService) {
    this.languageService.currentLanguageData.subscribe((data: any) => {
      this.languageData = data;
      this.frontEndServices = data.services.frontend;
      this.backEndServices = data.services.backend;
    });
  }
}