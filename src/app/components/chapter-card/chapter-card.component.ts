import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chapter-card',
  templateUrl: './chapter-card.component.html',
  styleUrls: ['./chapter-card.component.css']
})
export class ChapterCardComponent implements OnInit {

  piePercentage!: number;

  constructor() { }

  ngOnInit(): void {
    this.piePercentage = Math.round(Math.random() * 100);
  }

}
