import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ChaptersService } from 'src/app/services/chapters.service';
import { Chapter } from '../../../interfaces/chapters.interface';
import { Session } from '../../../interfaces/sessions.interface';

@Component({
  selector: 'app-chapter-page',
  templateUrl: './chapter-page.component.html',
  styleUrls: ['./chapter-page.component.css']
})
export class ChapterPageComponent implements OnInit {

  chapter!: Chapter;
  sessions!: Session[];
  piePercentage!: number;

  constructor(private _cs: ChaptersService,
    private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    const chapterId = this._activatedRoute.snapshot.params['id'];

    this._cs.chapterById(chapterId).subscribe(chapter => {
      this.chapter = chapter;

      this._cs.sessionsByChapterId(chapter.id).subscribe(sessions => {
        this.sessions = sessions;
        this.piePercentage = chapter.sessionsCompleted / sessions.length * 100;
      });
    });

  }

}
