import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  animat:Boolean=true
  @Input() languageData:any
@Input() arabic:any
  ngOnInit(): void {
    this.animation()
  }
  animation(){
    setTimeout(() => {
      this.animat = !this.animat
this.animation()
    }, 1000);
  }}
