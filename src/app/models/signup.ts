export class Signup {

  public username: string;
  public email: string;
  public password: string;
  public name: string;
  public birthDate: Date;
  public gender: number;
  public nationality: string;


  constructor(signupInfo) {
    this.username = signupInfo.username;
    this.email = signupInfo.email;
    this.password = signupInfo.password;
    this.name = signupInfo.name;
    this.birthDate = signupInfo.birthDate;
    this.gender = signupInfo.gender;
    this.nationality = signupInfo.nationality;
  }

}
