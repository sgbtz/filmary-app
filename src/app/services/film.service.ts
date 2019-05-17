import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { Observable, BehaviorSubject } from 'rxjs';

import { Film } from "../models/film";

import { filmsURL } from "../models/api-routes";

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(public http: HttpClient) { }

  getFilms(_films): Observable<Film[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Authentication": localStorage.getItem("token")
      }),
      params: _films
    }

    return this.http.get<Film[]>(filmsURL, httpOptions);
  }
}
