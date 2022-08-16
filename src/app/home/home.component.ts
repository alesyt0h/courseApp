import { Component, OnInit } from '@angular/core';
import { Chapter } from '../interfaces/chapters.interface';

import { ChaptersService } from '../services/chapters.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  chapters: Chapter[] = [];

  constructor(private _cs: ChaptersService) { }

  ngOnInit(): void {
    this._cs.getChapters().subscribe(chapters => {
      this.chapters = chapters;
    });
  }
}
