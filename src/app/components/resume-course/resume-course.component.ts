import { Component, OnInit } from '@angular/core';
import { map, tap } from 'rxjs';
import { Router } from '@angular/router';

import { ChaptersService } from '../../services/chapters.service';

import { Session } from '../../interfaces/sessions.interface';

@Component({
  selector: 'app-resume-course',
  templateUrl: './resume-course.component.html',
  styleUrls: ['./resume-course.component.css']
})
export class ResumeCourseComponent implements OnInit {

  chapterName: string = '';
  session!: Session;
  lastChapter!: number;
  lastSession!: number;
  sessionsLength!: number;

  constructor(private _cs: ChaptersService,
              private _router: Router) { }

  ngOnInit(): void {

    this._cs.getUser().subscribe(user => {
      const lastChapter = user.lastChapter;
      const lastSession = user.lastSession;

      this.lastChapter = lastChapter;
      this.lastSession = lastSession;

      this._cs.chapterById(lastChapter).subscribe(chapter => {
        this.chapterName = chapter.name;
      });

      this._cs.sessionsByChapterId(lastChapter).pipe(
        tap(sessions => {
          this.sessionsLength = sessions.length;
        }),
        map(sessions => sessions.filter( session => session.id === lastSession))
      ).subscribe(session => {
        this.session = session[0];
      });
    });
  }

  orderedPlay(){
    this._router.navigateByUrl(`/chapter/${this.lastChapter}/session/${this.lastSession}`);
  }

  nextSession(){
    if(this.lastSession + 1 > this.sessionsLength) return;

    this._router.navigateByUrl(`/chapter/${this.lastChapter}/session/${this.lastSession + 1}`);
  }

  randomOrder(){
    const next = Math.round(Math.random() * 50) + 1;

    this._router.navigateByUrl(`/chapter/${this.lastChapter}/session/${next}`);
  }

}
