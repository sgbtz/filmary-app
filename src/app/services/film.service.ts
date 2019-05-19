import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { Observable, BehaviorSubject } from 'rxjs';

import { TMDB_API_KEY } from "../models/CONSTANTS";
import { Film } from "../models/film";

import { filmsURL, searchFilmURL, catalogueURL, tmdbConfURL, addFilmURL, removeFilmURL } from "../models/api-routes";

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  public filmsResultSource$ = new BehaviorSubject<any>({});
  filmsResult$ = this.filmsResultSource$.asObservable();
  public userFilmsSource$ = new BehaviorSubject<any>({});
  userFilms$ = this.userFilmsSource$.asObservable();

  constructor(public http: HttpClient) { }

  changeFilmsResult(result) {
    this.filmsResultSource$.next(result);
  }

  changeUserFilms(result) {
    this.userFilmsSource$.next(result);
  }

  getFilms(_films): Observable<Film[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Authentication": localStorage.getItem("token")
      }),
      params: _films
    }

    return this.http.get<Film[]>(filmsURL, httpOptions);
  }

  getCatalogue(): Observable<Film[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Authentication": localStorage.getItem("token")
      })
    }

    return this.http.get<Film[]>(catalogueURL, httpOptions);
  }

  searchFilm(filmName: string): Observable<any> {
    var params: HttpParams = new HttpParams();
    params = params.append("api_key", TMDB_API_KEY);
    params = params.append("query", filmName);

    return this.http.get<any>(searchFilmURL + "?" + params.toString());
  }

  getTmdbConfig(): Observable<any> {
    var params: HttpParams = new HttpParams();
    params = params.append("api_key", TMDB_API_KEY);

    return this.http.get<any>(tmdbConfURL + "?" + params.toString());
  }

  addFilm(film: Film): Observable<boolean> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Authentication": localStorage.getItem("token")
      })
    }

    return this.http.post<boolean>(addFilmURL + "/" + localStorage.getItem("username"), film,  httpOptions);
  }

  removeFilm(film_id: string, tmdb_id: any): Observable<boolean> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Authentication": localStorage.getItem("token")
      })
    }
    if (!film_id)
      film_id = "0";

    return this.http.put<boolean>(removeFilmURL + "/" + localStorage.getItem("username") + "/" + film_id, { tmdb_id: tmdb_id },  httpOptions);
  }
}
