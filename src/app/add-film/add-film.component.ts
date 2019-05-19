import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { FilmService } from "../services/film.service";

@Component({
  selector: 'app-add-film',
  templateUrl: './add-film.component.html',
  styleUrls: ['./add-film.component.css']
})
export class AddFilmComponent implements OnInit {

  filmName: string;
  notFound: boolean;

  constructor(
    public dialogRef: MatDialogRef<AddFilmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public filmService: FilmService
  ) { }

  ngOnInit() { }

  searchFilm() {
    this.filmService.searchFilm(this.filmName).subscribe(result => {
      if (result.total_results > 0) {
        this.dialogRef.close(result);
      } else {
        this.notFound = true;
      }
    });
  }

}
