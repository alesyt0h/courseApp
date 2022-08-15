import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChapterPageComponent } from './pages/chapter-page/chapter-page.component';
import { SessionPageComponent } from './pages/session-page/session-page.component';

import { ChaptersRoutingModule } from './chapters-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [
    ChapterPageComponent,
    SessionPageComponent
  ],
  imports: [
    CommonModule,
    ChaptersRoutingModule,
    SharedModule,
    ComponentsModule
  ]
})
export class ChaptersModule { }
