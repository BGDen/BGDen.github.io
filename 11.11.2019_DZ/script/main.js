const   dom = {
  title : document.querySelector('#title'),
  type : document.querySelector('#type'),
  btnSearch : document.querySelector('.btnSearch'),
  content : document.querySelector('.content'),
  details : document.querySelector('.details'),
  table_info : document.querySelector('.all_info'),
  poster_large : document.querySelector('.poster_large'),
  pagination : document.querySelector('.pagination'),
  empty1 : null,
  empty2 : null
};

let arrCards = [],
  startCard = 0,
  loadPercent = 0;

dom.btnSearch.addEventListener('click', ()=> sendData(dom.title.value, dom.type.value));
dom.pagination.addEventListener('click', (event)=> pagination(event));

function clearSite() {
  arrCards = [];
  dom.content.innerHTML = '';
  dom.pagination.innerHTML = '';
  dom.details.style.display = 'none';
  startCard = 0;
}

function sendData(title, type, page = 1){
  (page == 1) ? clearSite() : false;
  fetch(`http://www.omdbapi.com/?apikey=b954bb68&s=${title}&page=${page}&type=${type}&plot=full`)
      .then(answ => answ.json())
      .then(data => getMovies(data));
}

function sendDataDetails(title) {
  fetch(`http://www.omdbapi.com/?apikey=b954bb68&t=${title}&plot=full`)
      .then(answ => answ.json())
      .then(data => renderMovieDetails(data));
}

function getMovies(data) {
  if (data.Response == "True") {
      if ((data.totalResults - arrCards.length) > 10) {
          data.Search.forEach((el) => {
              const card = new Card(el);
              arrCards.push(card);
          }); 
          loadPercent += (100 / data.totalResults / 10) * 100;
          dom.content.innerHTML = Math.round(loadPercent) + ' %';
          sendData(dom.title.value, dom.type.value, arrCards.length / 10 + 1);
      } else {
          data.Search.forEach((el) => {
              const card = new Card(el);
              arrCards.push(card);
          });
          renderMovies(startCard);
          (data.totalResults == arrCards.length) ? renderPagination(arrCards.length) : false;
      }
  }else{dom.content.innerHTML = `<h1>${data.Error}</h1>`}

}

function renderMovies(start) {
  dom.content.innerHTML = '';
  let len = arrCards.length,
      end = (len < start + 3) ? len : start + 3;
  for (let i = start; i < end; i++) {
      dom.content.append(arrCards[i].htmlElements.mainDiv);        
  }
}

function renderMovieDetails(data) {
  dom.details.style.display = 'block';
  dom.poster_large.setAttribute('src', data.Poster);
  [...dom.table_info.rows].forEach((row, i)=>{
      [...row.cells].forEach((cell, j)=>{
          if (j == 1) {
              switch (i) {
                  case 0:
                      cell.innerText = data.Title;
                      break;
                  case 1:
                      cell.innerText = data.Released;
                      break;
                  case 2:
                      cell.innerText = data.Genre;
                      break;
                  case 3:
                      cell.innerText = data.Country;
                      break;
                  case 4:
                      cell.innerText = data.Director;
                      break;
                  case 5:
                      cell.innerText = data.Writer;
                      break;
                  case 6:
                      cell.innerText = data.Actors;
                      break;
                  case 7:
                      cell.innerText = data.Awards;
                      break;
                  default:
                      break;
              }
          }
      });
  });
}

class Card{
  constructor(data){
      this.data = data;
      this.htmlElements = this.createCard();
      this.htmlElements.btnDetails.addEventListener('click', ()=>this.click());
  }
  createCard(){
      const htmlElements = {
              mainDiv : document.createElement('div'),
              img : document.createElement('img'),
              titleType : document.createElement('p'),
              movieName : document.createElement('p'),
              data : document.createElement('p'),
              btnDetails : document.createElement('button')
          };

      htmlElements.mainDiv.classList.add('card');
      htmlElements.titleType.classList.add('typeTitle');
      htmlElements.movieName.classList.add('movie_name');
      htmlElements.data.classList.add('date');
      htmlElements.btnDetails.classList.add('btnDetails');
      htmlElements.img.classList.add('poster_small');

      htmlElements.img.setAttribute('src', this.data.Poster);
      htmlElements.img.setAttribute('alt', 'poster');

      htmlElements.titleType.innerText = this.data.Type;
      htmlElements.movieName.innerText = this.data.Title;
      htmlElements.data.innerText = this.data.Year;
      htmlElements.btnDetails.innerText = 'Details';

      htmlElements.mainDiv.append(htmlElements.img, htmlElements.titleType, htmlElements.movieName, htmlElements.data, htmlElements.btnDetails);

      return htmlElements;
  }
  click(){
      sendDataDetails(this.data.Title);
  }
}

function renderPagination(sum){
  loadPercent = 0;
  dom.empty1 = document.createElement('div');
  dom.empty2 = document.createElement('div');
  const   buttons = {
              btnPrev : document.createElement('button'),
              btn1 : document.createElement('button'),
              btn2 : document.createElement('button'),
              btn3 : document.createElement('button'),
              btn4 : document.createElement('button'),
              btnPreLast : document.createElement('button'),
              btnLast : document.createElement('button'),
              btnNext : document.createElement('button')
          };
  dom.buttons = buttons;

  for (const key of Object.keys(buttons)) {
      buttons[key].classList.add('num');
  }
  buttons.btn1.classList.add('active');
  dom.empty1.classList.add('empty');
  dom.empty1.innerHTML = '...';
  dom.empty2.classList.add('empty');
  dom.empty2.innerHTML = '...';
  buttons.btnPrev.innerHTML = '&laquo; Previous';
  buttons.btnPrev.setAttribute('name', 'prev');
  buttons.btn1.innerHTML = '1';
  buttons.btn1.setAttribute('name', 'btn1');
  buttons.btn2.innerHTML = '2';
  buttons.btn2.setAttribute('name', 'btn2');
  buttons.btn3.innerHTML = '3';
  buttons.btn3.setAttribute('name', 'btn3');
  buttons.btn4.innerHTML = '4';
  buttons.btn4.setAttribute('name', 'btn4');
  buttons.btnPreLast.innerHTML = (sum >= 16) ? Math.ceil(sum / 3) - 1 : '4';
  buttons.btnPreLast.setAttribute('name', 'preLast');
  buttons.btnLast.innerHTML = (sum >= 16) ? Math.ceil(sum / 3) : '5';
  buttons.btnLast.setAttribute('name', 'last');
  buttons.btnNext.innerHTML = 'Next &raquo;';
  buttons.btnNext.setAttribute('name', 'next');

  switch (true) {
      case (sum <= 3):
          dom.pagination.append(buttons.btn1);
          break;
      case (sum >= 4 && sum <= 6):
          dom.pagination.append(buttons.btn1, buttons.btn2);
          break;
      case (sum >= 7 && sum <= 9):
          dom.pagination.append(buttons.btnPrev, buttons.btn1, buttons.btn2, buttons.btn3, buttons.btnNext);
          break;
      case (sum >= 10 && sum <= 12):
          dom.pagination.append(buttons.btnPrev, buttons.btn1, buttons.btn2, buttons.btn3, buttons.btnPreLast, buttons.btnNext);
          break;
      case (sum >= 13 && sum <= 15):
          dom.pagination.append(buttons.btnPrev, buttons.btn1, buttons.btn2, buttons.btn3, buttons.btnPreLast, buttons.btnLast, buttons.btnNext);
          break;
      case (sum >= 16 && sum <= 18):
          dom.pagination.append(buttons.btnPrev, buttons.btn1, buttons.btn2, buttons.btn3, buttons.btn4, buttons.btnPreLast, buttons.btnLast, buttons.btnNext);
          break;
      case (sum >=19 ):
          dom.pagination.append(buttons.btnPrev, buttons.btn1, buttons.btn2, buttons.btn3, dom.empty2, buttons.btnPreLast, buttons.btnLast, buttons.btnNext);
          break;
      default:
          break;
  }
}

function pagination(ev) {
  const   len = arrCards.length,
          sumNum = Math.ceil(len / 3);

  if (ev.target.nodeName == 'BUTTON') {
      switch (ev.target.name) {
          case 'prev':
              if (startCard > 2) {
                  startCard -= 3;
                  renderMovies(startCard);
                  changeActiveBtn(false);
              }
              break;
          case 'btn1':
              sendNumPage();
              break;
          case 'btn2':
              sendNumPage();
              break;
          case 'btn3':
              sendNumPage();
              break;
          case 'btn4':
              sendNumPage();
              break;
          case 'preLast':
              sendNumPage();
              break;
          case 'last':
              sendNumPage();
              break;
          case 'next':
              if (startCard < len - 3) {
                  startCard += 3;
                  renderMovies(startCard);
                  changeActiveBtn(true);
              }
              break;

          default:
              break;
      }
  }

  function sendNumPage() {
      startCard = (ev.target.innerText * 3) - 3;
      renderMovies(startCard);
      ev.target.parentNode.childNodes.forEach((el) => (el.classList.contains('active')? el.classList.remove('active') : false));
      ev.target.classList.add('active');
      if (parseInt(ev.target.innerText) < 3 && sumNum > 6) {
          if (dom.empty1.parentNode != null) dom.empty1.remove();
          if (dom.empty2.parentNode == null) dom.buttons.btn3.after(dom.empty2);
          dom.buttons.btn3.innerHTML = '3';
      } else if (parseInt(ev.target.innerText) > sumNum - 2 && sumNum > 6) {
          if (dom.empty1.parentNode == null) dom.buttons.btn3.before(dom.empty1);
          if (dom.empty2.parentNode != null) dom.empty2.remove();
          dom.buttons.btn3.innerHTML = sumNum - 2;
      }
  }

  function changeActiveBtn(next) {
      let tempElement = null;
      ev.target.parentNode.childNodes.forEach((el) => {
          if(el.classList.contains('active')) {
              tempElement = el;
              el.classList.remove('active');
          }
      });
      let btnNum = parseInt(tempElement.innerText);
      if (next) {
          if (sumNum < 7) {
              tempElement.nextSibling.classList.add('active');
          }else if (btnNum > 0 && btnNum < 3) {
              tempElement.nextSibling.classList.add('active');
          }else if (btnNum == 3){
              tempElement.before(dom.empty1);
              tempElement.classList.add('active');
              tempElement.innerText = btnNum + 1;
          }else if(btnNum > 3 && btnNum < sumNum - 3){
              tempElement.classList.add('active');
              tempElement.innerText = btnNum + 1;
          }else if (btnNum == sumNum - 3){
              dom.empty2.remove();
              tempElement.classList.add('active');
              tempElement.innerText = btnNum + 1;
          }else if (btnNum > sumNum - 3){
              tempElement.nextSibling.classList.add('active');
          }
      } else {
          if (sumNum < 7) {
              tempElement.previousSibling.classList.add('active');
          }else if (btnNum > 1 && btnNum < 4){
              tempElement.previousSibling.classList.add('active');
          }else if (btnNum > 4 && btnNum < sumNum - 2)  {
              tempElement.classList.add('active');
              tempElement.innerText = btnNum - 1;
          } else if (btnNum == 4){
              dom.empty1.remove();
              tempElement.classList.add('active');
              tempElement.innerText = btnNum - 1;
          } else if (btnNum > sumNum - 2 && btnNum < sumNum + 1) {
              tempElement.previousSibling.classList.add('active');
          } else if(btnNum == sumNum - 2) {
              tempElement.after(dom.empty2);
              tempElement.classList.add('active');
              tempElement.innerText = btnNum - 1;
          }
      }
  }
}
