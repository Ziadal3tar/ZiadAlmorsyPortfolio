
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ServicesComponent } from './components/services/services.component';
import { ControlComponent } from './components/control/control.component';
import { openControlGuard } from './services/open-control.guard';
import { NavComponent } from './components/nav/nav.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [

  // ✅ مسار محمي
  { path: 'open/:password', canActivate: [openControlGuard], component: ControlComponent },

  // ❌ مفيش داعي لمجرد "control" لو هتستخدم الباسورد
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
