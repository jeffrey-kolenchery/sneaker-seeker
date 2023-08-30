/**
 * @class regularUser
 * Inherits attributes from defaultUser. Model is constructed once user has an account in the DB.
 */

class regularUser extends defaultUser{

  private _email: String;
  
  private _password: String;
  
  constructor(email: String, password: String, likedShoes: Array<String>, isDefaultUser: boolean) {
    super(likedShoes, isDefaultUser)
    this.email = email;
    this.password = password;
  }

  public get email(): String {
    return this._email;
  }
  public set email(value: String) {
    this._email = value;
  }
  public get password(): String {
    return this._password;
  }
  public set password(value: String) {
    this._password = value;
  }

  }

export {regularUser};