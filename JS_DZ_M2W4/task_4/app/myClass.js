class HtmlElement{
  constructor(tag = '', endTag = false, text = ''){
    this.tag = tag;
    this.endTag = endTag;
    this.text = text;
    this.arrAttributes = [];
    this.arrStyle = [];
    this.arrChilds = [];
  }

  addAttributes(){
    for(let i = 0; i < arguments.length; i++){
      this.arrAttributes.push(arguments[i]);
    }
  }

  addStyles(){
    for(let i = 0; i < arguments.length; i++){
      this.arrStyle.push(arguments[i]);
    }
  }

  addToEndElements(){
    for(let i = 0; i < arguments.length; i++){
      this.arrChilds.push(arguments[i]);
    }
  }

  addToStartElements(elem){
    this.arrChilds.unshift(elem);
  }

  getHtml(){
    let htmlCode = '',
        tempCode = '',
        ind = 0;

    // Определяем самозакрывающийся тег или нет
    // Записываем в переменную htmlCode
    htmlCode = (this.endTag) ? `<${this.tag}>` : `<${this.tag}></${this.tag}>`;

    // Добавляем атрибуты тегу
    if(this.arrAttributes.length){
      tempCode = this.arrAttributes.reduce((sum, elem) => sum + ` ${elem}`);
      ind = htmlCode.indexOf('>');
      htmlCode = htmlCode.slice(0, ind) + ` ${tempCode}` + htmlCode.slice(ind);
    }

    // Добавляем стили тегу
    if(this.arrStyle.length){
      tempCode = this.arrStyle.reduce((sum, elem) => sum + ` ${elem}`);
      ind = htmlCode.indexOf('>');
      htmlCode = htmlCode.slice(0, ind) + ` style="${tempCode}"` + htmlCode.slice(ind);
    }

    // Добавляем в main тег вложенные теги
    if(this.arrChilds.length){
      tempCode = this.arrChilds.reduce((sum, elem) => sum + elem);
      ind = htmlCode.indexOf('>');
      htmlCode = htmlCode.slice(0, ind + 1) + tempCode + htmlCode.slice(ind + 1);
    }

    // Добавляем текстовое содержимое в тег
    if(this.text != ''){
      ind = htmlCode.indexOf('>');
      htmlCode = htmlCode.slice(0, ind + 1) + this.text + htmlCode.slice(ind +1);
    }

    return htmlCode;
  }
}

////////////////////////////////////////////
class CssClass {
  constructor(selector = '',){
    this.selector = selector;
    this.arrStyle = [];
  }

  addStyles(){
    for(let i = 0; i < arguments.length; i++){
      this.arrStyle.push(arguments[i]);
    }
  }

  deleteStyles(style){
    this.arrStyle = this.arrStyle.filter(elem => !elem.includes(style));
  }

  getCss(){
    let styleCode = (this.arrStyle.length) ? `.${this.selector}{` + this.arrStyle.reduce((sum, elem) => sum + elem) + `}` : false;
    return styleCode;
  }
}

////////////////////////////////////////////
class HtmlBlock{
  constructor(arrStyle = [], mainHtml = ''){
    this.arrStyle = arrStyle;
    this.mainHtml = mainHtml;
  }
  getCode(){
    return `<style>${this.arrStyle.reduce((sum, elem) => sum + elem)}</style>${this.mainHtml}`;
  }
}