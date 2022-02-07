import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component'
import {AboutPageComponent} from './about-page/about-page.component'
import {ContactPageComponent} from './contact-page/contact-page.component'


const routes: Routes = [
  { path: 'home', component: HomePageComponent},
  { path: 'about', component: AboutPageComponent},
  { path: 'contact', component: ContactPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomePageComponent, AboutPageComponent, ContactPageComponent]
