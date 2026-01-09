import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
export interface Project {
  _id: string;
  name: string;
  description: string;
  images: string[];
  technologies: string[];
  types: string[];
  link: string;
  code: string;
}
@Component({
  selector: 'app-details',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  
  project!: Project;
  id!: string;
  activeHeroImage!: string;
  
  isViewerOpen = false;
currentImageIndex = 0;
startX = 0;

  constructor(
    private route: ActivatedRoute,
    private common: CommonService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!;

    this.common.loadProjects().subscribe(() => {
      const result = this.common.getProjectById(this.id);

      if (result) {
        this.activeHeroImage = result.images[0]
        this.project = result;
      }
    });
  }
  setHeroImage(img: string): void {
    this.activeHeroImage = img;
  }
  goBack(): void {
  this.router.navigate(['/']);
}


openViewer(index: number): void {
  this.currentImageIndex = index;
  this.isViewerOpen = true;
}

closeViewer(): void {
  this.isViewerOpen = false;
}
next(): void {
  if (this.currentImageIndex < this.project.images.length - 1) {
    this.currentImageIndex++;
  }
}

prev(): void {
  if (this.currentImageIndex > 0) {
    this.currentImageIndex--;
  }
}
onTouchStart(event: TouchEvent): void {
  this.startX = event.touches[0].clientX;
}

onTouchEnd(event: TouchEvent): void {
  const endX = event.changedTouches[0].clientX;
  const diff = this.startX - endX;

  if (diff > 50) this.next();      // swipe left
  if (diff < -50) this.prev();     // swipe right
}
git(link: string): void {
  try {
    const url = new URL(link);

    if (url.hostname !== 'ziadal3tar.github.io') return;

    const repo = url.pathname.split('/')[1];

    if (!repo) return;

    window.open(
      `https://github.com/Ziadal3tar/${repo}`,
      '_blank'
    );
  } catch {
    return;
  }
}

}
