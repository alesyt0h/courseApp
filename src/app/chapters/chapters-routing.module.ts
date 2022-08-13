import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SessionPageComponent } from './pages/session-page/session-page.component';
import { ChapterPageComponent } from './pages/chapter-page/chapter-page.component';

const routes: Routes = [
  { path: '', component: ChapterPageComponent },
  { path: 'session/:id', component: SessionPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChaptersRoutingModule { }
