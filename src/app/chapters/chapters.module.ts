import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChaptersRoutingModule } from './chapters-routing.module';
import { ChapterPageComponent } from './pages/chapter-page/chapter-page.component';
import { SessionPageComponent } from './pages/session-page/session-page.component';


@NgModule({
  declarations: [
    ChapterPageComponent,
    SessionPageComponent
  ],
  imports: [
    CommonModule,
    ChaptersRoutingModule
  ]
})
export class ChaptersModule { }
