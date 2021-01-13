import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {AboutusComponent} from './aboutus/aboutus.component';
import {CompetencyComponent} from './competency/competency.component';
import { FacilitiesComponent} from './facilities/facilities.component';
import { VisionComponent} from './vision/vision.component';
import {ProjectreferenceComponent} from './projectreference/projectreference.component';
import {CommunityComponent} from './community/community.component';
import {ContactComponent} from './contact/contact.component';

const routes: Routes = [
  { path: 'home',  component: HomeComponent,},
  { path: 'aboutus',  component: AboutusComponent,},
  { path: 'competency',  component: CompetencyComponent,},
  { path: 'facilities', component: FacilitiesComponent},
  { path:'vision',component:VisionComponent},
  { path:'projectreference',component:ProjectreferenceComponent},
  { path: 'community', component:CommunityComponent},
  { path:'contact',component:ContactComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
