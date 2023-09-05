import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  {path:'',redirectTo:"home",pathMatch:'full'},
  {path: 'home', component:HeaderComponent},
  {path: 'contact', component:ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
