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
    document.body.append(`удалён -  ${style}`);
  }

  getCss(){
    let styleCode = (this.arrStyle.length) ? `.${this.selector}{` + this.arrStyle.reduce((sum, elem) => sum + elem) + `}` : false;
    return styleCode;
  }
  
}