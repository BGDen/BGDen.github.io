const   dom = {
  btnSend : document.querySelector('.send'),
  inpName : document.querySelector('.name'),
  inpMsg : document.querySelector('.msg'),
  output : document.querySelector('.output')
};

  (function getCookie() {
    const   cookie = decodeURIComponent(document.cookie).split(';').map(el=>el.trim());

    if(cookie != ''){
        cookie.forEach((el)=>{
        let name = el.slice(0, el.indexOf('=')),
            msg = el.slice(el.indexOf('=') + 1, el.indexOf('/time/')),
            msgDate = el.slice(el.indexOf('/time/') + 6);
  
            renderMsg(name, msg, msgDate);
        });
    }
  })();

  dom.btnSend.addEventListener('click', () => {
    if (dom.inpName.value === '' || dom.inpMsg.value === '') {
        alert('Введите имя и сообщение!');
        } else {
        renderMsg(dom.inpName.value, dom.inpMsg.value);
        setCookie(dom.inpName.value, dom.inpMsg.value);
        dom.inpName.value = '';
        dom.inpMsg.value = '';
   }
  });

function renderMsg(name, msg, msgDate = new Date()) {
  const   outTitle = document.createElement('h3'),
          outText = document.createElement('p'),
          outDate = document.createElement('p');

          outTitle.innerText = name;
          outText.innerText = msg;
          outDate.innerHTML = `&nbsp&nbsp<i>${msgDate}</i>`;

      dom.output.append(outTitle, outText, outDate);
}

function setCookie(name, msg) {
    const   d = new Date(),
      expires = "expires="+ d.toUTCString();
      document.cookie = `${name}=${msg}/time/${d};`;
}