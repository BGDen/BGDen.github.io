function genHTML(){

   // создаём главный div с id = wrapper
   const wrapperDiv = new HtmlElement('div', false);
   wrapperDiv.addAttributes(`id='wrapper'`);
   wrapperDiv.addStyles(`width: 100vw; display: flex; flex-direction: column; justify-content: center; align-items: center; background: radial-gradient(rgb(255, 240, 37), rgba(60, 255, 0, 0.596));`);
 
   // создаём вложенный childDiv, со своими вложенными тегами
   const childDiv = new HtmlElement('div', false);
   childDiv.addStyles('width: 450px;', 'margin: 30px;', 'display: flex;', 'flex-direction: column;', 'align-items: center;');

   // создаём вложенные теги
   const tag_h2 = new HtmlElement('h2', false, 'This is a very funny little man )))');
   const tag_img = new HtmlElement('img', true);
   const tag_p = new HtmlElement('p', false, 'This is your favorite song!');
   const tag_a = new HtmlElement('a', false, `Super Simple Song`);
   const tag_br = new HtmlElement('br', true);

   // определяем им атрибуты и стили
   tag_img.addAttributes(`src="img/man-pointing-finger.png"`, `alt="fany_man"`);
   tag_img.addStyles(`width: 100%;`);
   tag_p.addStyles(`text-align: center; font-weight: bolder; font-size: 1.5em;`);
   tag_a.addAttributes(`href="https://www.youtube.com/watch?v=eBVqcTEC3zQ"`, `target="_blank"`);
   tag_p.addToStartElements(tag_br.getHtml()); // вставляем тег <br> в тег <p>
   tag_p.addToEndElements(tag_a.getHtml()); // вставляем тег <a> в тег <p>

   // вставляем все теги в childDiv
   childDiv.addToEndElements(tag_img.getHtml(), tag_p.getHtml());
   childDiv.addToStartElements(tag_h2.getHtml());

   // вставляем childDiv в главный div
   wrapperDiv.addToEndElements(childDiv.getHtml());

   // Добавим ссылку возврата на главную страницу
   const linkBack = new HtmlElement('a', true, '(Return)');
   linkBack.addAttributes(`href="index.html"`);
   linkBack.addStyles('font-size: 1.5em;','color: maroon;', 'font-weight: bold;', 'margin-bottom: 1em;');
   wrapperDiv.addToEndElements(linkBack.getHtml());

   document.write(wrapperDiv.getHtml());
}