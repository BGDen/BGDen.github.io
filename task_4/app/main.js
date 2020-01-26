function genCode(){

  const wrapperDiv = new HtmlElement('div', false);
  wrapperDiv.addAttributes(`id='wrapper'`,`class='wrap'`);

  // создаём вложеный childDiv, со своими вложенными тегами
  const childDiv = new HtmlElement('div', false);
  childDiv.addAttributes(`class='block'`);

  // создаём вложенные теги
  const tag_h2 = new HtmlElement('h2', false, `Pumping your brain!`);
  const tag_img = new HtmlElement('img', true);
  const tag_p = new HtmlElement('p', false, `Применение искусственного интеллекта — процесс активного использования современных научных достижений в области информатики в различных областях жизнедеятельности общества.`);
  const tag_a = new HtmlElement('a', false, `Приложения искусственного интеллекта...`);
  const tag_br = new HtmlElement('br', true);

  // устанавливаем им атрибуты и стили
  tag_h2.addAttributes(`class="sizeH2"`);
  tag_img.addAttributes(`src="img/man-pointing-finger.png"`,`alt="IA"`,`class="img"`);
  tag_p.addAttributes(`class="text"`);
  tag_a.addAttributes(`href="https://ru.wikipedia.org/wiki/%D0%9F%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F_%D0%B8%D1%81%D0%BA%D1%83%D1%81%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE_%D0%B8%D0%BD%D1%82%D0%B5%D0%BB%D0%BB%D0%B5%D0%BA%D1%82%D0%B0"`,`target="_blank"`);
  tag_p.addToStartElements(tag_br.getHtml()); // вставляем тег <br> в тег <p>
  tag_p.addToEndElements(tag_a.getHtml()); // вставляем тег <a> в тег <p>

  // вставляем все теги в childDiv
  childDiv.addToEndElements(tag_img.getHtml(), tag_p.getHtml());
  childDiv.addToStartElements(tag_h2.getHtml());

  // вставляем childDiv в главный div
  wrapperDiv.addToEndElements(childDiv.getHtml());

  // добавим ссылку возврата на главную страницу
  const linkBack = new HtmlElement('a', true, '(Return)');
  linkBack.addAttributes(`href="index.html"`);
  linkBack.addStyles('font-size: 1.5em;','color: maroon;', 'font-weight: bold;', 'margin-bottom: 1em;');
  wrapperDiv.addToEndElements(linkBack.getHtml());

  //добавляем стили с именами селекторов
  let colectionStyle = [];

  const selH2 = new CssClass('sizeH2');
  selH2.addStyles(`font-size: 2.5em; color: #FF4040;`);
  colectionStyle.push(selH2.getCss());

  const selWrap = new CssClass('wrap');
  selWrap.addStyles(`width: 100vw; display: flex; flex-direction: column; justify-content: center; align-items: center; background: radial-gradient(rgba(99, 59, 243, 0.651), rgba(93, 0, 129, 0.801));`);
  colectionStyle.push(selWrap.getCss());

  const selBlock = new CssClass('block');
  selBlock.addStyles('width: 450px;', 'margin: 30px;', 'display: flex;', 'flex-direction: column;', 'align-items: center;');
  colectionStyle.push(selBlock.getCss());

  const selImg = new CssClass('img');
  selImg.addStyles('width:100%;');
  colectionStyle.push(selImg.getCss());

  const selText = new CssClass('text');
  selText.addStyles(`text-align: center; font-weight: bolder; font-size: 1.2em;`);
  colectionStyle.push(selText.getCss());

  const htmlBlock = new HtmlBlock(colectionStyle, wrapperDiv.getHtml());

  document.write(htmlBlock.getCode());
}