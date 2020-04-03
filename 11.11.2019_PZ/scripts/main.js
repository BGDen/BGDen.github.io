const dom = {
          blcJsonString : document.querySelector('.jsonString'),
          blcJsonParse : document.querySelector('.jsonParse'),
          btn : document.querySelector('.btn'),
          error : document.querySelector('.error')
      },
      errorMsg  = `[format error]`;


dom.blcJsonString.addEventListener('click', ()=> dom.error.innerHTML = '');

dom.btn.addEventListener('click', ()=>{
    try {                                                             // блок исключения try, если в блоке произошла ошибка,
        let jsonText = JSON.parse(dom.blcJsonString.value);           // то управление незамедлительно переходит в блок catch.
        dom.blcJsonParse.value = JSON.stringify(jsonText, null, 4);
        dom.error.innerHTML = '';
    } catch (error) {                                                 // если в try блоке не будет никакой ошибки, 
        dom.error.innerHTML = errorMsg;                               // то блок catch пропустится.
        dom.blcJsonParse.value = '';     
    }
});