export class ModelShop {
  constructor (data){
    this.arrCards = [];
                                    }

  getWatch(){
    return fetch('./App/data/Catalog_card.json')
    .then((response) => response.json())
    .then((data) => {
      this.arrCards = data;
      return this.getCurrentList(0);
    });
  }

  getCurrentList(num){
    let currentArrCards = [],
        fromCard = num * 1,
        toCard = fromCard + 2;
        for(let i = fromCard; i < toCard; i++){
          if(this.arrCards[i] !== undefined){
            currentArrCards.push(this.arrCards[i]);
          }else{i = toCard;}
        }
        console.log(currentArrCards);
        return currentArrCards;
  }

  getFullCard(id){ // находим нужные часы по id
    return this.arrCards.find((el) => el.id == id);
  }

  getSearchedData(sValue){
    const regS = new RegExp(sValue, 'i');
    return this.arrCards.filter(el => regS.test(el.name)); // true / false
  }

///////////////////////////////////////////////////////////////////////////

  getFabric(){
    return this.arrCards.length;
  }

}