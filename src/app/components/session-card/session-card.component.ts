import { Component, Input, OnInit, AfterViewChecked } from '@angular/core';

import { Chapter } from '../../interfaces/chapters.interface';
import { Session } from '../../interfaces/sessions.interface';

@Component({
  selector: 'app-session-card',
  templateUrl: './session-card.component.html',
  styleUrls: ['./session-card.component.css']
})
export class SessionCardComponent implements OnInit, AfterViewChecked {

  @Input() chapter!: Chapter;
  @Input() sessions!: Session[];
  started: boolean = false;

  constructor() { }

  ngAfterViewChecked(): void {
    this.scrollToSession();
  }

  ngOnInit(): void {
  }

  scrollToSession(){
    const selected = document.querySelector('.next-session');

    if(selected && !this.started){
      selected.scrollIntoView();
      this.started = true;
    }
  }

  selectSession(event: MouseEvent){

    const selected = document.querySelector('.next-session');

    if(selected){
      selected.classList.remove('next-session');
    }

    const target = event.currentTarget as Element;
    target.classList.add('next-session');

    this.chapter.lastSession = +target.id;
  }

}
