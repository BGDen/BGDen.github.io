class Element{
  constructor(htmlElement){
      this.htmlElement = htmlElement;
  }

  setId(id){
      this.htmlElement.setAttribute('id', id);
  }

  addClass(cssClass){
      this.htmlElement.classList.add(cssClass);
  }

  setContent(text){
      this.htmlElement.innerText = text;
  }

  addChild(child){
      this.htmlElement.innerHTML += child;
  }

  print(){
      return this.htmlElement.outerHTML;
  }
}

class DomBuilder{
  constructor(){
      return this;
  }

  create(tagName){
      this.element = new Element(document.createElement(tagName));
      return this;
  }

  withClass(className){
      this.element.addClass(className);
      return this;
  }

  withId(idName){
      this.element.setId(idName);
      return this;
  }

  withChild(childElem){
      this.element.addChild(childElem);
      return this;
  }

  withContent(text){
      this.element.setContent(text);
      return this;
  }

  get result(){
      return this.element.print();
  }
}

let p1 = new DomBuilder().create('p').withId('p1').withClass('text').withContent('Hello,').result;
let p2 = new DomBuilder().create('p').withId('p2').withClass('text').withContent('world!').result;
let div = new DomBuilder().create('div').withId('main').withClass('container').withChild(p1).withChild(p2).result;

document.querySelector('body').innerHTML = div;

