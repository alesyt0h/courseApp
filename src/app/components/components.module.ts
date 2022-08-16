import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NgSelectModule } from 'ng-custom-select';

import { ChapterCardComponent } from './chapter-card/chapter-card.component';
import { ResumeCourseComponent } from './resume-course/resume-course.component';
import { SessionCardComponent } from './session-card/session-card.component';
import { SettingsComponent } from './settings/settings.component';



@NgModule({
  declarations: [
    ChapterCardComponent,
    ResumeCourseComponent,
    SessionCardComponent,
    SettingsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgSelectModule
  ],
  exports: [
    ChapterCardComponent,
    ResumeCourseComponent,
    SessionCardComponent,
    SettingsComponent
  ]
})
export class ComponentsModule { }
