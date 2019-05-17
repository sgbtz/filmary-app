import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { LoginComponent } from "../login/login.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    public router: Router,
    public route: ActivatedRoute
  ) { }

  ngOnInit() {
    // if the user has already logged in, redirect to dashboard
    if (localStorage.getItem("isLoggedIn") == "true")
      this.router.navigate(["/dashboard"]);

    this.route.url.subscribe(url => {
      if (url.length > 1 && url[1].path == "login")
        this.openLogin();
    });
  }

  openLogin() {
    const loginDialogRef = this.dialog.open(LoginComponent, {
      width: '350px'
    });
    loginDialogRef.afterClosed().subscribe(success => {
      if(success)
        this.router.navigate(["/dashboard"]);
    });
  }

}
