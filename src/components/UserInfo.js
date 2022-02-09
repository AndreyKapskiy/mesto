export default class UserInfo {
  constructor({ nameSelector, professionSelector }) {
    this._nameSelector = nameSelector;
    this._professionSelector = professionSelector; 
  }

  getUserInfo() {
    this.userInfo = {
      name: this._nameSelector.textContent,
      profession: this._professionSelector.textContent
    };

    return this.userInfo;
  }

  setUserInfo({name, profession}) {
    this._nameSelector.textContent = name;
    this._professionSelector.textContent = profession;
  }
}

