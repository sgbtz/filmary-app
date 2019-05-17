import { Component, OnInit, Input } from '@angular/core';

import { Film } from "../models/film";

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  @Input() films: Film[];

  constructor() { }

  ngOnInit() {
  }

}
