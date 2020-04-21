import {Spinner} from './spinner.js';

const spinners = ['⠋⠙⠚⠞⠖⠦⠴⠲⠳⠓','⢹⢺⢼⣸⣇⡧⡗⡏','☱☲☴','_-=≡=-_','⦾⦿','■□▪▫','⊶⊷','▖▘▝▗','⠁⠂⠄⠂','___-\`\`\'\´-__','✶✸✹✺✹✷','▓▒░','⠁⠃⠓⠛⠙⠉','╗╣╬╩╚╠╔╦','┐┤┼┴└├┬','←↖↑↗→↘↓↙','◡◡⊙⊙◠◠','◴◷◶◵','⠁⠂⠄⡀⢀⠠⠐⠈','▉▊▋▌▍▎▏▎▍▌▋▊▉','▁▃▄▅▆▇█▇▆▅▄▃','⣾⣽⣻⢿⡿⣟⣯⣷','|/-\\','➕❌','.oO.'];

const ul = document.querySelector('.spinners');

const speed = 100;
let arrSpin = [];

(function(){
  ul.innerHTML = '';
    spinners.forEach((el,i)=>{
        let c = new Spinner(el,i,speed);
        let div = document.createElement('div');
        div.classList.add(`spin${i}`);
        div.style.color = randomColor();
        ul.appendChild(div);
        c.spin();
        arrSpin.push(c);
    });
}());

function randomColor(){
  return `rgb(${random(0,255)},${random(0,255)},${random(0,255)})`;
}

function random(min,max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}