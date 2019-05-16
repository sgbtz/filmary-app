import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { Observable, BehaviorSubject } from 'rxjs';

import { Login } from "../models/login";
import  { Signup } from "../models/signup";
import  { User } from "../models/user";
import { loginURL, signupURL, userURL } from "../models/api-routes";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loginURL: string = loginURL;
  signupURL: string = signupURL;
  userURL: string = userURL;
  public userSource$ = new BehaviorSubject<User>(new User());
  currentUser$ = this.userSource$.asObservable();

  constructor(public http: HttpClient) { }

  // this method change the user to all components
  changeUser(user: User) {
    this.userSource$.next(user);
  }

  getUser(): Observable<User> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Authentication": localStorage.getItem("token")
      })
    }
    return this.http.get<User>(`${this.userURL}/${localStorage.getItem("_user")}`, httpOptions)
  }

  loginUser(loginInfo: Login): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    return this.http.post<any>(`${this.loginURL}`, loginInfo, httpOptions);
  }

  createUser(signupInfo: Signup): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post<any>(`${this.signupURL}`, signupInfo, httpOptions);
  }
}
