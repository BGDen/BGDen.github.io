function getTime(str) {
  let time = {},
      t = str.split(':');;
  time.mm = parseInt(t[0]);
  time.ss = parseInt(t[1]);
  time.ms = parseInt(t[2]);
  return time;
}

function addZero(n) {
  return (n < 10) ? '0' + n : n;
}

const links = {
  btnStart: document.querySelector('#start'),
  btnStop: document.querySelector('#stop'),
  btnCircle: document.querySelector('#circle'),
  btnPause: document.querySelector('#pause'),
  inp: document.querySelector('input'),
  circleBlc: document.querySelector('.blc_right')
};

let timerId = null;

links.btnStart.addEventListener('click', ()=> {
  if(!timerId){
    timerId = setInterval(()=> {
            let time = getTime(links.inp.value);
            if(time.ms != 9){
              links.inp.value = `${addZero(time.mm)}:${addZero(time.ss)}:${addZero(time.ms +1)}`;
            }else if(time.ss < 59){
              links.inp.value = `${addZero(time.mm)}:${addZero(time.ss +1)}:0`;
            }else if(time.ss = 59){
              links.inp.value = `${addZero(time.mm +1)}:00:0`;
            };
    }, 100);
  };
});

links.btnStop.addEventListener('click', ()=> {
  clearInterval(timerId);
  links.inp.value = `00:00:0`;
  links.circleBlc.innerHTML = `<div class ="title">&darr; Circle</div>`;
  timerId = null;
});

links.btnPause.addEventListener('click', ()=>{
  clearInterval(timerId);
  timerId = null;
});

links.btnCircle.addEventListener('click', () =>{
  if ((links.inp.value != '00:00:0') && (timerId)){
      links.circleBlc.innerHTML += `<div class="circle">${links.inp.value}</div>`;    
  }
});
