import {Model} from '../MVC/model.js';
import {View} from '../MVC/view.js';

export class Controller{
  constructor(){
    this.model = new Model(this.getUser.bind(this));
    this.view = new View(this.addUser.bind(this));
  }

  getUser(user){
    this.view.renderUser(user);
    console.log(user);
  }

  addUser(){
    this.model.getDataUser();
  }
}