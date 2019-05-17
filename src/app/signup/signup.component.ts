import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { confirmEmailValidator } from "../validators/email-confirmation.directive";
import { confirmPasswordValidator } from "../validators/password-confirmation.directive";
import { LoginComponent } from "../login/login.component";

import { LoginService } from "../services/login.service";

import { Signup } from "../models/signup";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  nations: string[] = [];
  maxDate: Date = new Date(new Date().getFullYear()-18, new Date().getMonth(), new Date().getDate()); // max checkout
  signupForm: FormGroup = new FormGroup({
    username: new FormControl("",[Validators.required]),
    email: new FormControl("",[Validators.required]),
    confirmEmail: new FormControl("",[Validators.required]),
    password: new FormControl("",[Validators.required]),
    confirmPassword: new FormControl("",[Validators.required]),
    name: new FormControl("",[Validators.required]),
    lastName: new FormControl("",[Validators.required]),
    birthDate: new FormControl("",[Validators.required]),
  }, { validators: [ confirmEmailValidator, confirmPasswordValidator ] });

  constructor(
    public dialog: MatDialog,
    public loginService: LoginService,
    public router: Router
  ) { }

  ngOnInit() {}

  onSignup() {
    let signupInfo: Signup = new Signup({
      username: this.signupForm.value.username,
      email: this.signupForm.value.email,
      lastName: this.signupForm.value.lastName,
      password: this.signupForm.value.password,
      name: this.signupForm.value.name,
      birthDate: this.signupForm.value.birthDate,
    });


    this.loginService.createUser(signupInfo)
      .subscribe(res => {
        console.log(res)
        localStorage.setItem("username", res.login);
        this.router.navigate(["/dashboard"]);
      });
  }
  signIn() {
    this.router.navigate(["/home/login"]);
  }
}
