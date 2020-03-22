export class Model{
  constructor(getAllMsg){
    this.config = {
      url: 'http://so2niko.zzz.com.ua/examples/chat/api.php',
      getMethod: 'get',
      postMethod: 'post',
      async: true // асинхронность
    };
    this.getAllMsg = getAllMsg;
  }

  getMsgFromSrv(){
    const ajax = new XMLHttpRequest(); // способ получения данных по ссылке без перезагрузки страницы
    ajax.open(this.config.getMethod, this.config.url, this.config.async); // ( get, DOMString для отправки запроса, true )
    ajax.send(); //  отправка запроса, при GET тело запроса устанавливается в null
    ajax.addEventListener('readystatechange', ()=> { // Событие readystatechange возникает, когда изменяется свойство AJAX запроса - readyState
      if(ajax.status == 200 && ajax.readyState == 4){ // Код 200 означает, что запрос обработан успешно / 4 Completed - Завершение всех операций
        this.getAllMsg(JSON.parse(ajax.responseText)); // получим *распарсеный текст ответа от сервера на отправленный запрос
      }
    });
  }

  postData(msg){
    const ajax = new XMLHttpRequest();
    ajax.open(this.config.postMethod, this.config.url, this.config.async);
    ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); // метод устанавливает значения HTTP заголовков (всегда после open() / перед send())
    // (header - имя устанавливаемого заголовка, value - значение, которое будет установлено как тело заголовка)
    // Content-type - это указание для сервера, как обрабатывать (раскодировать) пришедший запрос
    ajax.send(`data=true&name=${msg.name}&color=${msg.color}&text=${msg.text}`);
    this.getMsgFromSrv();
  }
}