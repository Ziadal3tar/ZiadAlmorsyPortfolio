import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  
  constructor(
    private route: ActivatedRoute,
    private common: CommonService
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
}
