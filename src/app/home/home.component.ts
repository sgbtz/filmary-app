import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { LoginComponent } from "../login/login.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  test: string = "Test";

  constructor(public dialog: MatDialog,) { }

  ngOnInit() {
  }

  openLogin() {
    const loginDialogRef = this.dialog.open(LoginComponent, {
      width: '350px'
    });
  }

}
