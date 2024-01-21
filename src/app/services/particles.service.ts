// particles.service.ts
import { Injectable, ElementRef, NgZone } from '@angular/core';

declare var particlesJS: any;

@Injectable({
  providedIn: 'root',
})
export class ParticlesService {
  constructor(private zone: NgZone) {}

  createParticles(elementRef: ElementRef): void {
    this.zone.runOutsideAngular(() => {
      particlesJS(elementRef.nativeElement, {
        // particles.js configuration options
        particles: {
          number: {
            value: 80,
          },
          size: {
            value: 3,
          },
        },
        // Add more options as needed
      });
    });
  }
}
