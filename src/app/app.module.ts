import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { ChapterCardComponent } from './components/chapter-card/chapter-card.component';
import { ResumeCourseComponent } from './components/resume-course/resume-course.component';
import { SessionCardComponent } from './components/session-card/session-card.component';
import { HomeComponent } from './home/home.component';
import { ChaptersModule } from './chapters/chapters.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ChapterCardComponent,
    ResumeCourseComponent,
    SessionCardComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChaptersModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
