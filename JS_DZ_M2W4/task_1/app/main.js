function clickM(){

  const circle = new Circle(150);
  
  let myDivC = document.createElement('div'),
  mySpan = document.createElement('span'),
  divStyle = document.createElement('style');

  myDivC.innerText = 'R =' + circle.radius + '\n' + 'S =' + circle.square() + '\n' + 'L = ' + circle.len();
  mySpan.innerText = `d = ${circle.diameter}`;

  divStyle.innerText = `
  div {width: ${circle.radius * 2}px;
       height: ${circle.radius * 2}px;
       border-radius: 50%;
   //  border: 3px solid black;
       margin: 20px 0 5px 0;
       background: #FF4040;
       display: flex;
       flex-derection: column;
       align-items: center;
       justify-content: center;}
  span {width: ${circle.diameter - 2}px;
       border: 1px solid black;
       text-align: center;
       border-top: none}`;
  
  
  document.body.append(myDivC);
  document.body.append(mySpan);
  document.head.append(divStyle);

}