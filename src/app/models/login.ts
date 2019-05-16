export class Login {

	public login: string; // email or username
  public password: string;

  constructor(loginInfo) {
    this.login = loginInfo.login;
    this.password = loginInfo.password;
  }

}
