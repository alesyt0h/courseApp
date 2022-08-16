import { Component, Input, OnInit } from '@angular/core';

import { ChaptersService } from '../../services/chapters.service';

import { Session } from '../../interfaces/sessions.interface';
import { Chapter } from 'src/app/interfaces/chapters.interface';

@Component({
  selector: 'app-chapter-card',
  templateUrl: './chapter-card.component.html',
  styleUrls: ['./chapter-card.component.css']
})
export class ChapterCardComponent implements OnInit {

  piePercentage!: number;
  sessions!: Session[];
  @Input() chapter!: Chapter;

  constructor(private _cs: ChaptersService) { }

  ngOnInit(): void {

    this._cs.sessionsByChapterId(this.chapter.id).subscribe(sessions => {
      this.sessions = sessions;
      this.piePercentage = this.chapter.sessionsCompleted / this.sessions.length * 100;
    });
  }

}
