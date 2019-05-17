import { Component, OnInit } from '@angular/core';

import { LoginService } from "../services/login.service";
import { FilmService } from "../services/film.service";

import { User } from "../models/user";
import { Film } from "../models/film";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user: User;
  films: Film[];

  constructor(
    public loginService: LoginService,
    public filmService: FilmService,
  ) { }

  ngOnInit() {
    this.loginService.getUser().subscribe(user => {
      this.user = user;
      this.filmService.getFilms(user._films).subscribe(films => this.films = films);
    });

  }

  addFilm() {
    
  }
}
