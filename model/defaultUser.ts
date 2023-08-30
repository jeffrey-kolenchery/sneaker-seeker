/**
 * @class defaultUser
 * Contains a username, password and an empty likedShoes table. 
 * This is the default cofiguration of a user. regularUser is inherited from this class.
 * This class enables unregistered users to browse the app without having an account.
 * 
 */
class defaultUser {

  private _likedShoes: Array<String>;
  private _isDefaultUser: Boolean;
  
  constructor(likedShoes: Array<String>, isDefaultUser: boolean) {
    this.likedShoes = likedShoes || [];
    this.isDefaultUser = isDefaultUser || true;
  }

  public get likedShoes(): Array<String> {
    return this._likedShoes;
  }
  public set likedShoes(value: Array<String>) {
    this._likedShoes = value;
  }
  public get isDefaultUser(): Boolean {
    return this._isDefaultUser;
  }
  public set isDefaultUser(value: Boolean) {
    this._isDefaultUser = value;
  }

  }