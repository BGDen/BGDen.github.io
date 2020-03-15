export class Model{
  constructor(getUser){
    this.config = {
      method: 'GET',
      url: 'https://randomuser.me/api/'
    };
    this.getUser = getUser;
  }

  getDataUser(){
    const ajax = new XMLHttpRequest(); // новый экземпляр объекта запроса из конструктора XMLHttpRequest

    ajax.open(this.config.method, this.config.url); // открываем новый запрос, GET - извлекаем некоторые данные / URL-адрес файла JSON
    ajax.responseType = 'json';  // устанавливаем responseType в JSON, так что XHR знает, что сервер будет возвращать JSON и что это должно быть преобразовано за кулисами в объект JavaScript
    ajax.send(); // отправляем запрос методом send()
    ajax.addEventListener('readystatechange', () => { // Событие readystatechange возникает, когда изменяется свойство AJAX запроса - readyState
      if(ajax.status == 200 && ajax.readyState == 4){ // Код 200 означает, что запрос обработан успешно / 4 Completed - Завершение всех операций
        this.getUser(ajax.response.results[0]); // response - возвращает содержимое тела ответа в виде JavaScript Object
      }
    });
  }
}