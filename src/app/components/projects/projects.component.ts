import { Component } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  filter: String = 'all';
  projects: any[] = [];
  project: any;
  imageNum: any = 0;
  constructor(private _common: CommonService) {}
  ngOnInit(): void {
    this._common.getAllProjects().subscribe((data: any) => {
      this.projects = data.project;
      console.log(data);
    });
  }
  active(data: any, name: any) {
    let lis: any = document.getElementById('ul')?.children;
    for (let i = 0; i < lis?.length; i++) {
      let element = lis[i];
      element.classList.remove('active');
    }
    data.target.classList.add('active');
    this.filter = name;
    const divs: any = document.getElementById('projects')?.children;
  }
  right() {
    console.log(this.project.images.length);

    if (this.imageNum == this.project.images.length - 1) {
      this.imageNum = 0;
    } else {
      this.imageNum += 1;
    }
  }
  left() {
    if (this.imageNum == 0) {
      this.imageNum = this.project.images.length - 1;
    } else {
      this.imageNum -= 1;
    }
  }
  details(id: any) {

    let div: any = document.getElementById(`project${id}`);
    var translateXValue1 = '200%';
    var translateXValue2 = '0%';
    var translateXValue3 = '-200%';

if (div.classList.contains('added')) {
  (div.classList.remove('added'))

  div.children[0].style.transform = 'translateX(' + translateXValue2 + ')';
  div.children[2].style.transform = 'translateX(' + translateXValue3 + ')';
}else{
  (div.classList.add('added'))
  div.children[0].style.transform = 'translateX(' + translateXValue1 + ')';
  div.children[2].style.transform = 'translateX(' + translateXValue2 + ')';
}
  }
  close(){
    this.project=''
    this.imageNum = 0
  }
}
