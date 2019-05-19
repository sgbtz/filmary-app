import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { LoginService } from "../services/login.service";
import { AuthService } from "../services/auth.service";
import { FilmService } from "../services/film.service";

import { User } from "../models/user";
import { Film } from "../models/film";

import { AddFilmComponent } from "../add-film/add-film.component";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  searchForm: FormGroup = new FormGroup({
    title: new FormControl()
  });
  user: User;
  films: Film[] = [];
  filteredFilms: Observable<Film[]>;

  constructor(
    public loginService: LoginService,
    public authService: AuthService,
    public filmService: FilmService,
    public router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.loginService.getUser().subscribe(user => {
      this.user = user;
      this.filmService.getFilms(user._films).subscribe(films => {
        this.films = films
        this.filmService.changeUserFilms(this.films);
        this.films.forEach(film => {
          if (this.user._films.indexOf(film._id) != -1)
            film.added = true;
        });
        this.filteredFilms = this.searchForm.controls.title.valueChanges.pipe(
          startWith(''),
          map(value => this._filter(value))
        );
      });
    });
  }

  // filter films by name
  public _filter(value: string): Film[] {
    let filterValue = value.toLowerCase();

    if (filterValue.length < 1)
      return this.films

    return this.films.filter(film => film.title.toLowerCase().includes(filterValue));
  }

  logout() {
    this.authService.logout();
    this.router.navigate(["/home"]);
  }

  addFilm() {
    const addFilmDialogRef = this.dialog.open(AddFilmComponent, {
      width: '350px'
    });
    addFilmDialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.filmService.changeFilmsResult(result);
        this.router.navigate(["/catalogue/result"]);
      }
    });
  }
}
