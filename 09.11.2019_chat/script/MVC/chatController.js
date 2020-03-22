import {View} from '../MVC/chatView.js';
import {Model} from '../MVC/chatModel.js';

export class Controller{
  constructor(){
    this.view = new View(this.postMsg.bind(this));
    this.model = new Model(this.getAllMsg.bind(this));
    this.model.getMsgFromSrv();
  }

  getAllMsg(dataAllMsg){
    this.view.renderAllMsg(dataAllMsg);
  }

  postMsg(ev){
    ev.preventDefault(); // отмена действия браузера по умолчанию, для обработки script
    const msg ={
      name: ev.target[0].value,
      text: ev.target[1].value,
      color: ev.target[2].value
    };
    this.model.postData(msg);
    this.model.getMsgFromSrv();
    this.view.clearForm(); // восстанавливает стандартные значения всем элементам формы
  }
}