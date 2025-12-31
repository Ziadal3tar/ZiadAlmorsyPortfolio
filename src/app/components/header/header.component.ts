import { Component, ElementRef, EventEmitter, Input, Output, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { ParticlesService } from 'src/app/services/particles.service';

declare const particlesJS: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, AfterViewInit {
  @Output() changeTap = new EventEmitter<string>();
  @Input() languageData: any;
  @Input() color: string = '#fff';
  @Input() dark: boolean = false;

  @ViewChild('particlesContainer', { static: false }) particlesContainer!: ElementRef;

  private elements!: {
    shkl1: HTMLElement;
    shkl2: HTMLElement;
    imageP: HTMLElement;
    doc: HTMLElement;
  };

  constructor(
    private _common: CommonService,
    private router: Router,
    private particlesService: ParticlesService
  ) {}

  ngOnInit(): void {
    this.initializeParticles();
  }

  ngAfterViewInit(): void {
    this.cacheElements();
    this.playAnimation();
  }

  /** Cache DOM elements once for better performance */
  private cacheElements(): void {
    this.elements = {
      shkl1: document.getElementById('shkl1')!,
      shkl2: document.getElementById('shkl2')!,
      imageP: document.getElementById('imageP')!,
      doc: document.getElementById('doc')!,
    };
  }

  /** Animation loop with cleaner logic */
  private async playAnimation(): Promise<void> {
    const { shkl1, shkl2, imageP, doc } = this.elements;
    while (true) {
      shkl1.className = 'shkl12';
      shkl2.className = 'shkl22';
      imageP.style.marginTop = '-45px';
      await this.delay(3000);

      shkl1.className = 'shkl1';
      shkl2.className = 'shkl2';
      imageP.style.marginTop = '160%';
      await this.delay(500);

      shkl1.className = 'shkl13';
      doc.style.marginLeft = '-10px';
      await this.delay(3000);

      shkl1.className = 'shkl1';
      doc.style.marginLeft = '100%';
      await this.delay(500);
    }
  }

  private delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  toPdf(): void {
    window.open(
      'https://drive.google.com/file/d/1hXe289kzs4nuuvKnqqHfyAooxmKF9efM/view?usp=sharing',
      '_blank'
    );
  }

  click(section: string): void {
    this.changeTap.emit(section);
  }

  initializeParticles(): void {
    particlesJS('particles-js', {
      particles: {
        number: { value: 100, density: { enable: true, value_area: 800 } },
        color: { value: this.color },
        shape: { type: 'circle' },
        opacity: { value: 0.5, random: true },
        size: { value: 3, random: true },
        line_linked: {
          enable: true,
          distance: 150,
          color: this.color,
          opacity: 0.4,
          width: 1,
        },
        move: { enable: true, speed: 3 },
      },
      interactivity: {
        events: { onhover: { enable: true, mode: 'grab' }, resize: true },
        modes: { grab: { distance: 180, line_linked: { opacity: 1 } } },
      },
      retina_detect: true,
    });
  }
}
