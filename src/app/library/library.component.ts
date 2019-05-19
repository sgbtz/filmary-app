import { Component, OnInit, Input } from '@angular/core';

import { Film } from "../models/film";

import { FilmService } from "../services/film.service";

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  @Input() films: Film[] = [];
  tmdbConf: {
    images: {
      base_url: string,
      secure_base_url: string,
      backdrop_sizes: string[],
      logo_sizes: string[],
      poster_sizes: string[],
      profile_sizes: string[],
      still_sizes: string[]
    },
    change_keys: string[]
  }

  constructor(public filmService: FilmService) { }

  ngOnInit() {
    this.filmService.getTmdbConfig().subscribe(conf => this.tmdbConf = conf);
  }

  addFilmToLibrary(film: Film) {
    this.filmService.addFilm(film).subscribe(success => {
      if (success)
        film.added = true;
    });
  }

  removeFilmFromLibrary(film: Film) {
    this.filmService.removeFilm(film._id, film.id).subscribe(success => {
      if (success)
        film.added = false;
    });
  }

}
