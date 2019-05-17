export class Signup {

  public username: string;
  public email: string;
  public password: string;
  public name: string;
  public lastName: string;
  public birthDate: Date;


  constructor(signupInfo) {
    this.username = signupInfo.username;
    this.email = signupInfo.email;
    this.password = signupInfo.password;
    this.name = signupInfo.name;
    this.lastName = signupInfo.lastName;
    this.birthDate = signupInfo.birthDate;
  }

}
