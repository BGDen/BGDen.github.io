import { ModelShop } from "./ModelShop.js";
import { ViewShop } from "./ViewShop.js";

export class ControllerlShop {
  constructor (){
    this.model = new ModelShop(this.handleGetData.bind(this));
    this.view = new ViewShop(this.handlClickCard.bind(this), this.handleClickSearch.bind(this), this.handleCloseModal.bind(this), this.handleClickPaginator.bind(this));
    this.model.getWatch().then(d=>this.view.render(d)).then(this.handleGetData());
  }

  handlClickCard(ev) { // обработчик клика по карточке
    let elem = ev.target;
    while (elem.id == '') {	// находим id карточки
      elem = elem.parentElement;
    }
    const fullData = this.model.getFullCard(elem.id); // получаем от Model полную инфу по id часов
    this.view.renderFullCard(fullData); // отдаем View, чтоб отрендерить в модальном окне всю найденую инфу
  }
  
  handleCloseModal(){
    this.view.closeModalCard();
  }

  handleClickSearch(){
    // Выкачиваем введенный текст в поиске
    const searchStr = this.view.searchValue;
    // Передать текст Model
    const searchedData = this.model.getSearchedData(searchStr);
    // Получить новые данные для рендера
    
    // эти данные передать View для рендера новых карточек
    this.view.render(searchedData);
  }

////////////////////////////////////////////////////////////////////////////////////////

  handleGetData(){
    this.len = this.model.getFabric();
    this.view.renderPagination(this.len, 0);
    this.showList(0);
  }

  showList(num){
    this.view.render(this.model.getCurrentList(num))
  }

  handleClickPaginator(ev){
    this.view.renderPagination(this.len, Number(ev.target.innerText));
    this.showList(ev.target.innerText);
  }

}