export class View{
  constructor(sendMsg){
    this.dom = {
      messegeBoard: document.querySelector('.message_board'),
      msgList: document.querySelector('.list'),
      btnSend: document.querySelector('.btnSend'),
      inputName: document.querySelector('.name'),
      textArea: document.querySelector('textarea'),
      formMsg: document.querySelector('#form')
    };
    this.dom.formMsg.addEventListener('submit', sendMsg);
  }

  renderAllMsg(arrMsg){
    arrMsg.forEach((el)=>{
      const msg = document.createElement('li');
      msg.innerHTML = `<h4>${el.name}</h4><p style='color:${el.color}'>${el.text}</p><span>${el.time}</span><br><br><hr>`;
      this.dom.msgList.append(msg);
      this.dom.messegeBoard.scrollTop = this.dom.messegeBoard.scrollHeight; 
      // scrollTop измеряет дистанцию от верха элемента до верхней точки видимого контента
      // scrollHeight измерение высоты контента в элементе, включая содержимое, невидимое из-за прокрутки
    });
  }

  clearForm(){
    this.dom.formMsg.reset(); // восстанавливает стандартные значения всем элементам формы
  }
}