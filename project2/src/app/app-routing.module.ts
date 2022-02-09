import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component'
import {AboutPageComponent} from './about-page/about-page.component'
import {ContactComponent} from './contact/contact.component'
import {RecordsComponent} from './records/records.component'

const routes: Routes = [
  {path: 'home', component: HomePageComponent},
  {path: 'aboutus', component:AboutPageComponent},
  {path: 'contact', component:ContactComponent},
  {path: 'records', component:RecordsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomePageComponent, AboutPageComponent, ContactComponent, RecordsComponent]