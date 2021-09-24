import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { CarouselComponent } from './carousel/carousel.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProjectComponent } from './project/project.component';
import { DemoComponent } from './demo/demo.component';
import { SafePipe } from './safe.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// custom
import { projects, socials, themes } from 'src/assets/ts/globals';
import { SocialLinksComponent } from './social-links/social-links.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProjectsComponent,
    AboutComponent,
    CarouselComponent,
    PageNotFoundComponent,
    ProjectComponent,
    DemoComponent,
    SafePipe,
    SocialLinksComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [
    { provide: 'PROJECTS', useValue: projects },
    { provide: 'SOCIALS', useValue: socials },
    { provide: 'THEMES', useValue: themes}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
