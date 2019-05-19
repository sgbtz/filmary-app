import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

import { Film } from "../models/film";

import { FilmService } from "../services/film.service";

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

  userFilms: Film[] = [];
  searchResult: {
    page: number,
    results: Film[],
    total_results,
    total_pages
  }
  films: Film[];

  constructor(
    public filmService: FilmService,
    public router: Router,
    public route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.filmService.userFilms$.subscribe(userFilms => {
      this.userFilms = userFilms;
      this.route.url.subscribe(url => {
        if (url.length > 1 && url[1].path == "result") {
          this.filmService.filmsResult$.subscribe(result => {
            this.searchResult = result;
            this.films = this.searchResult.results;
            this.checkAdded(this.films);
          });
        } else {
          this.filmService.getCatalogue().subscribe(films => this.films = films);
          this.checkAdded(this.films);
        }
      });
    })
  }

  checkAdded(films) {
    this.films.forEach(film => {
      this.userFilms.forEach(userFilm => {
        if (userFilm.id == film.id)
          film.added = true;
      });
    });
  }

}
