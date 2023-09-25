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
  {path:'',redirectTo:"home",pathMatch:'full'},
  {path: 'home', component:HomeComponent},
  {path: 'contact', component:ContactComponent},
  {path: 'projects', component:ProjectsComponent},
  {path: 'services', component:ServicesComponent},
  {path: 'about', component:AboutComponent},
  {path: 'open/:password',canActivate:[openControlGuard], component:ControlComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
