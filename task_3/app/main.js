function genCSS(){

  const cssClass = new CssClass('square');

  cssClass.addStyles('display: flex; ','flex-direction: column; ','justify-content:center; ','margin:2.5em; ','color:red; ','width:100px; ','height:100px; ','border:1px solid black; ','font-size:2em;');

  cssClass.deleteStyles('width');

  console.log(cssClass.getCss());
  
  let selMy = document.createElement('div');
  selStyle = document.createElement('style');


  selMy.innerText = `hello`;

  selStyle.innerText = `${cssClass.getCss()}`;

  document.body.append(selMy);
  document.head.append(selStyle);

  document.querySelector('div').classList.add('square');

  document.body.append(cssClass.getCss());

}
