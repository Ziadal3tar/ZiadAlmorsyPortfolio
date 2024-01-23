import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavComponent } from './components/nav/nav.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ServicesComponent } from './components/services/services.component';
import { AboutComponent } from './components/about/about.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ControlComponent } from './components/control/control.component';
import { openControlGuard } from './services/open-control.guard';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { LoadingComponent } from './components/loading/loading.component';
import { AppRoutingModule } from './app-routing.module';
import { RotateTextDirective } from './components/rotate-text.directive';
import { ParticlesService } from './services/particles.service';
import { SkillsComponent } from './components/skills/skills.component';
import { DragScrollDirective } from './services/drag-scroll.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    ContactComponent,
    ProjectsComponent,
    ServicesComponent,
    AboutComponent,
    ControlComponent,
    HomeComponent,
    LoadingComponent,
    RotateTextDirective,
    SkillsComponent,
    DragScrollDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule,
  ],
  providers: [ParticlesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
