import { Component } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import 'hammerjs';
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
      this.projects = data.project.reverse();
      const arrayJSON = JSON.stringify(data.project);
      localStorage.setItem('allProjects', arrayJSON);
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

    const storedArrayJSON: any = localStorage.getItem('allProjects');
    const storedArray = JSON.parse(storedArrayJSON);
    if (name == 'all') {
this.projects = storedArray
    }else{
      for (let i = 0; i < storedArray.length; i++) {
        this.projects = storedArray.filter((item: any) =>
          item.types.includes(name)
        );
      }
    }

  }

  details(id: any) {
    let div: any = document.getElementById(`project${id}`);
    var translateXValue1 = '200%';
    var translateXValue2 = '0%';
    var translateXValue3 = '-200%';

    if (div.classList.contains('added')) {
      div.classList.remove('added');

      div.children[0].style.transform = 'translateX(' + translateXValue2 + ')';
      div.children[2].style.transform = 'translateX(' + translateXValue3 + ')';
    } else {
      div.classList.add('added');
      div.children[0].style.transform = 'translateX(' + translateXValue1 + ')';
      div.children[2].style.transform = 'translateX(' + translateXValue2 + ')';
    }
  }

  changeImg(i: any) {
    this.imageNum = i;
  }
  close() {
    this.project = '';
    this.imageNum = 0;
    let nav: HTMLElement | any = document.getElementById('nav');
    nav.style.setProperty('display', 'flex', 'important');
  }
  hideNav(){

    let nav: HTMLElement | any = document.getElementById('nav');
    nav.style.setProperty('display', 'none', 'important');
  }


  isMouseDown: boolean = false;
  initialMouseX: number = 0;
  hasChangedImage: boolean = false;

  onMouseDown(event: MouseEvent) {
    this.isMouseDown = true;
    this.initialMouseX = event.clientX;
    this.hasChangedImage = false; // Reset the flag when the mouse is down
  }

  onMouseMove(event: MouseEvent) {
    if (this.isMouseDown && !this.hasChangedImage) {
      const deltaX = event.clientX - this.initialMouseX;

      if (deltaX > 50) { // You can adjust this threshold as needed
        // Mouse is moving to the right
        this.showNextImage();
        this.hasChangedImage = true; // Set the flag to true once the function is called
      } else if (deltaX < -50) { // You can adjust this threshold as needed
        // Mouse is moving to the left
        this.showPreviousImage();
        this.hasChangedImage = true; // Set the flag to true once the function is called
      }
    }
  }

  onMouseUp() {
    this.isMouseDown = false;
    this.hasChangedImage = false; // Reset the flag when the mouse is up
  }

  onMouseLeave() {
    this.isMouseDown = false;
    this.hasChangedImage = false; // Reset the flag when the mouse leaves the container
  }

  onMouseOut() {
    this.isMouseDown = false;
    this.hasChangedImage = false; // Reset the flag when the mouse leaves the container
  }

  showNextImage() {
    this.imageNum = (this.imageNum + 1) % this.project.images.length;
  }

  showPreviousImage() {
    this.imageNum = (this.imageNum - 1 + this.project.images.length) % this.project.images.length;
  }
}
