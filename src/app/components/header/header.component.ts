import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { ParticlesService } from 'src/app/services/particles.service';
declare let particlesJS: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() changeTap: EventEmitter<any> = new EventEmitter<any>();
@Input() languageData:any

@Input() color:any
@Input() dark:any

  constructor(private _common: CommonService,private _Router:Router,private particlesService: ParticlesService) {}
  @ViewChild('particlesContainer') particlesContainer!: ElementRef;

  ngOnInit(): void {
    this.initializeParticles();

    this.play();
  }
  ngAfterViewInit(): void {
    // this.particlesService.createParticles(this.particlesContainer);
  }
  play(): any {
    let shkl1 = <HTMLInputElement>document.getElementById('shkl1');
     shkl1.classList.replace('shkl1', 'shkl12');
    let shkl2 = <HTMLInputElement>document.getElementById('shkl2');
     shkl2.classList.replace('shkl2', 'shkl22');
    let imageP = <HTMLInputElement>document.getElementById('imageP');
    let doc = <HTMLInputElement>document.getElementById('doc');
    imageP.style.marginTop = '-45px';

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
    window.open('https://res.cloudinary.com/dqaf8jxn5/image/upload/v1721571028/ZiadAlmorsyCv_i7796s.pdf')
  }
  click(tap:any){
  this.changeTap.emit(tap);

  }
  initializeParticles() {

    particlesJS('particles-js', {
      particles: {
        number: {
          value: 110,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: this.color
        },
        shape: {
          type: 'circle',
          stroke: {
            width: 0,
            color: '#000000'
          },
          polygon: {
            nb_sides: 5
          },
        },
        opacity: {
          value: 0.5,
          random: true,
          anim: {
            enable: true,
            speed: 1,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: false,
            speed: 40,
            size_min: 0.1,
            sync: false
          }
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: this.color,
          opacity: 0.4,
          width: 1
        },
        move: {
          enable: true,
          speed: 6,
          direction: 'none',
          random: false,
          straight: false,
          out_mode: 'out',
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200
          }
        }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: {
            enable: true,
            mode: 'grab'
          },
          onclick: {
            enable: true,
            mode: 'push'
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 200,
            line_linked: {
              opacity: 1
            }
          },
          bubble: {
            distance: 200,
            size: 80,
            duration: 0.4,
            opacity: 0.8,
            speed: 3
          },
          repulse: {
            distance: 100,
            duration: 1
          },
          push: {
            particles_nb: 4
          },
          remove: {
            particles_nb: 2
          }
        }
      },
      retina_detect: true
    });
  }
}
