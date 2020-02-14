export class ModelShop {
  constructor (data){
    this.arrCards = [];
  }

  getWatch(){
    return fetch('./App/data/Catalog_card.json')
    .then((response) => response.json())
    .then((data) => (this.arrCards = data));
  }

  getFullCard(id){ // находим нужные часы по id
    return this.arrCards.find((el) => el.id == id);
  }

  getSearchedData(sValue){
    const regS = new RegExp(sValue, 'i');
    return this.arrCards.filter(el => regS.test(el.name)); // true / false
  }

} 
