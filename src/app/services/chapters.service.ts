import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

import { environment } from 'src/environments/environment';

import { Chapter } from '../interfaces/chapters.interface';
import { Session } from '../interfaces/sessions.interface';
import { User } from '../interfaces/users.interface';

@Injectable({
  providedIn: 'root'
})
export class ChaptersService {

  apiUrl: string = environment.API_BASE_URL;

  constructor(private _http: HttpClient) { }

  getChapters(){
    return this._http.get<Chapter[]>(`${this.apiUrl}/chapters`);
  }

  sessionsByChapterId(chapterId: number){
    return this._http.get<Session[]>(`${this.apiUrl}/sessions?chapterId=${chapterId}`);
  }

  chapterById(chapterId: number){
    return this._http.get<Chapter[]>(`${this.apiUrl}/chapters?id=${chapterId}`).pipe(
      map(chapters => chapters[0])
    );
  }

  // Since we only have one, we don't need to retrieve all of them
  getUser(){
    return this._http.get<User[]>(`${this.apiUrl}/users?id=1`).pipe(
      map(users => users[0])
    );
  }
}
