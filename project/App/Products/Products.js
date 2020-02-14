class Products{

  render(){
    
    let htmlCatalog = '';
    CATALOG.forEach(({ id, name, price, img }) => {

      htmlCatalog += `
      <div class="catalog_card amazfit_card" id="${id}">
        <div class="card_view">
          <a href="./App/Content/index_watch.html">
          <img src="${img}" width="240px" height="240px" alt="img">
          </a>
        </div>
        <div class="card_info">
          <div class="card_title">${name}</div>
          <div class="card_price">${price}</div>
        </div>
        <div class="btn_buy">
          <a href="#" class="button_buy button_glass">Купить</a>
        </div>
      </div>
      `
    });

    const html = `
    <div class="catalog">
      ${htmlCatalog}
    </div>
    `;

    ROOT_PRODUCTS.innerHTML = html;
  }
}

const productsPage = new Products();
productsPage.render();