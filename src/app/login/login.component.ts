import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { Login } from "../models/login";

import { LoginService } from "../services/login.service";
import { AuthService } from "../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginInfo: Login = new Login({ login: localStorage.getItem("username")});
  failToast: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<LoginComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public router: Router,
    public loginService: LoginService,
    public authService: AuthService
  ) { }

  onLogin() {
    this.loginService.loginUser(this.loginInfo).subscribe(loginResponse => {
      if (loginResponse.success) {
        this.authService.login(loginResponse._id,loginResponse.username, loginResponse.token);
        this.dialogRef.close(loginResponse.success);
      } else {
        this.failToast = true;
      }
    });
  }
}
