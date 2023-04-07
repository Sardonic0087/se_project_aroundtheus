export default class UserInfo {
  constructor({ nameSelector, jobSelector }) {
    this._nameElement = document.querySelector(nameSelector);
    this._jobElement = document.querySelector(jobSelector);
  }
  getUserInfo() {
    return {
      name: this._nameElement.textcontent,
      job: this._jobElement.textcontent,
    };
  }

  setUserInfo(name, job) {
    this._nameElement.textcontent = name;
    this._jobElement.textcontent = job;
  }
}
