import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CompetencyComponent } from './competency/competency.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { VisionComponent } from './vision/vision.component';
import { ProjectreferenceComponent } from './projectreference/projectreference.component';
import { CommunityComponent } from './community/community.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutusComponent,
    CompetencyComponent,
    FacilitiesComponent,
    VisionComponent,
    ProjectreferenceComponent,
    CommunityComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
