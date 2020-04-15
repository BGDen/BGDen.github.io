class Block{ // 2 // 3
  constructor(className){
      this.div = document.createElement('div');
      this.div.classList.add(className);
      this.color = this.randomColor();
      this.div.style.backgroundColor = this.color;
  }
  
  randomColor(){
      const   r = Math.floor(Math.random() * (255 + 1)),
              g = Math.floor(Math.random() * (255 + 1)),
              b = Math.floor(Math.random() * (255 + 1));
      return `rgb(${r}, ${g}, ${b})`;
  }
  
  eventRemove(){ // 2
      this.div.addEventListener('click',()=> this.div.remove());
  }

  eventChangeColorText(){ // 3
      this.div.addEventListener('click', ()=> dom.colorText.style.color = this.color); 
  }
}

class Comment{ // 4
  constructor(author, date, text){
      this.mainDiv = document.createElement('div');
      this.mainDiv.classList.add('comment');
      this.author = document.createElement('h3');
      this.author.classList.add('name_author');
      this.author.innerText = author;
      this.date = document.createElement('p');
      this.date.classList.add('date');
      this.date.innerText = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
      this.text = document.createElement('p');
      this.text.classList.add('text_comment');
      this.text.innerText = text;
      this.mainDiv.append(this.author, this.date, this.text);
  }
}

class CountryName{ // 5
  constructor(name){
      this.li = document.createElement('li');
      this.value = name;
      this.li.innerHTML = `&nbsp;${this.value}`;
      dom.countryList.appendChild(this.li);
      this.li.addEventListener('click', () => this.select());
  }
  select(){
      dom.country.value = this.value;
      dom.countryList.innerHTML = '';
      dom.countryList.classList.add('none');
  }
}

const   dom = {
          numBlc : document.querySelector('.num'), // 1
          up : document.querySelector('.up'),
          down : document.querySelector('.down'),

          conteinerBlocks : document.querySelector('.conteiner_blocks'), // 2
          btnAddBlocks : document.querySelector('.btnAddBlocks'),

          colorPalette : document.querySelector('.color_palette'), // 3
          colorText : document.querySelector('.color_text'),

          formComment : document.querySelector('.form_comment'), // 4
          author : document.querySelector('.author'),
          textComment : document.querySelector('#input_comment'),
          btnAddComment : document.querySelector('.btnAddComment'),

          country : document.querySelector('.country'), // 5
          countryList : document.querySelector('.country_list')
      },
      arrContry = `Абхазия,Австралия,Австрия,Азербайджан,Албания,Алжир,Ангола,Андорра,Антигуа и Барбуда,Аргентина,Армения,Афганистан,Багамские Острова,Бангладеш,Барбадос,Бахрейн,Белиз,Белоруссия,Бельгия,Бенин,Болгария,Боливия,Босния и Герцеговина,Ботсвана,Бразилия,Бруней,Буркина-Фасо,Бурунди,Бутан,Вануату,Ватикан,Великобритания,Венгрия,Венесуэла,Восточный Тимор,Вьетнам,Габон,Гаити,Гайана,Гамбия,Гана,Гватемала,Гвинея,Гвинея-Бисау,Германия,Гондурас,Государство Палестина,Гренада,Греция,Грузия,Дания,Джибути,Доминика,Доминиканская Республика,ДР Конго,Египет,Замбия,Зимбабве,Израиль,Индия,Индонезия,Иордания,Ирак,Иран,Ирландия,Исландия,Испания,Италия,Йемен,Кабо-Верде,Казахстан,Камбоджа,Камерун,Канада,Катар,Кения,Кипр,Киргизия,Кирибати,Китай,КНДР,Колумбия,Коморские Острова,Коста-Рика,Кот-д'Ивуар,Куба,Кувейт,Лаос,Латвия,Лесото,Либерия,Ливан,Ливия,Литва,Лихтенштейн,Люксембург,Маврикий,Мавритания,Мадагаскар,Малави,Малайзия,Мали,Мальдивские Острова,Мальта,Марокко,Маршалловы Острова,Мексика,Мозамбик,Молдавия,Монако,Монголия,Мьянма,Намибия,Науру,Непал,Нигер,Нигерия,Нидерланды,Никарагуа,Новая Зеландия,Норвегия,ОАЭ,Оман,Пакистан,Палау,Панама,Папуа - Новая Гвинея,Парагвай,Перу,Польша,Португалия,Республика Конго,Республика Корея,Россия,Руанда,Румыния,Сальвадор,Самоа,Сан-Марино,Сан-Томе и Принсипи,Саудовская Аравия,Северная Македония,Сейшельские Острова,Сенегал,Сент-Винсент и Гренадины,Сент-Китс и Невис,Сент-Люсия,Сербия,Сингапур,Сирия,Словакия,Словения,Соломоновы Острова,Сомали,Судан,Суринам,США,Сьерра-Леоне,Таджикистан,Таиланд,Танзания,Того,Тонга,Тринидад и Тобаго,Тувалу,Тунис,Туркмения,Турция,Уганда,Узбекистан,Украина,Уругвай,Федеративные Штаты Микронезии,Фиджи,Филиппины,Финляндия,Франция,Хорватия,ЦАР,Чад,Черногория,Чехия,Чили,Швейцария,Швеция,Шри-Ланка,Эквадор,Экваториальная Гвинея,Эритрея,Эсватини,Эстония,Эфиопия,ЮАР,Южная Осетия,Южный Судан,Ямайка,Япония`.split(',');

// Task 1 ////////////////////////////////////////////////////
let     num = 0;

dom.up.addEventListener('click', ()=> dom.numBlc.innerText = ++num);
dom.down.addEventListener('click', ()=> dom.numBlc.innerText = --num);

// Tack 2 /////////////////////////////////////////////////////
let blocks = 0;

dom.btnAddBlocks.addEventListener('click', ()=>{
  for (let i = 0; i < 10; i++) {
      const block = new Block('block');
      block.eventRemove();
      dom.conteinerBlocks.appendChild(block.div);
  }
});

// Task 3 //////////////////////////////////////////////////////
for (let i = 0; i < 16; i++) {
  const colorBlock = new Block('color_block');
  colorBlock.eventChangeColorText();
  dom.colorPalette.appendChild(colorBlock.div);
};

// Task 4 ///////////////////////////////////////////////////////
dom.btnAddComment.addEventListener('click', ()=>{
  if (dom.author.value !== '') {
      const comment = new Comment(dom.author.value, new Date, dom.textComment.value);
      dom.formComment.before(comment.mainDiv);
      dom.author.value = '';
      dom.textComment.value = '';   
  }
});

// Task 5 /////////////////////////////////////////////////////////
dom.country.addEventListener('keyup', () =>{
  if (event.key.charCodeAt(0) <= 1103 && event.key.charCodeAt(0) >= 1040 || event.key.charCodeAt(0) == 66) { // charCodeAt - возвращает значение юникода
      const arrCountryFilter = arrContry.filter((el)=>el.toLowerCase().includes(dom.country.value.toLowerCase()));
      if (arrCountryFilter.length && dom.country.value != '') {
          dom.countryList.innerHTML = '';
          dom.countryList.classList.remove('none');
          const len = (arrCountryFilter.length > 10) ? 10 : arrCountryFilter.length;
          for (let i = 0; i < len; i++) {
              const newLi = new CountryName(arrCountryFilter[i]);                
          }
      }else{
          dom.countryList.innerHTML = '';
          dom.countryList.classList.add('none');
      }
  }
})