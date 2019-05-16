import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  jwtHelper: JwtHelperService = new JwtHelperService();

  constructor() { }

  login(_id: string, username: string, token: string) {
    localStorage.setItem('isLoggedIn', "true");
    localStorage.setItem('_user', _id);
    localStorage.setItem('username', username);
    localStorage.setItem('token', token);
  }

  logout() {
    localStorage.setItem("isLoggedIn", "false");
    localStorage.removeItem("_user");
    localStorage.removeItem("username");
    localStorage.removeItem("token");
  }

  checkExpToken(): boolean {
    var token = localStorage.getItem("token");
    return this.jwtHelper.isTokenExpired(token);
  }

  public isLoggedIn(): boolean {
    let status = false;
    if (localStorage.getItem("isLoggedIn") == "true" && !this.checkExpToken()) {
      status = true;
    } else {
      status = false;
    }

    return status;
  }
}
