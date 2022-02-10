export default class UserInfo {
  constructor({ name, profession }) {
    this._name = name;
    this._profession = profession; 
  }

  getUserInfo() {
    this._userInfo = {
      name: this._name.textContent,
      profession: this._profession.textContent
    };

    return this._userInfo;
  }

  setUserInfo({name, profession}) {
    this._name.textContent = name;
    this._profession.textContent = profession;
  }
}

