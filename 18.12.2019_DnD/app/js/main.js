let     timer = 5,
        score = 0,
        timerId = null,
        gameTimerId = null;

const   arrCookie = [],
        domLinks = {
            wrapper : document.querySelector('.wrapper'),
            blackHole : document.querySelector('.black_hole'),
            timer : document.querySelector('.timer'),
            score : document.querySelector('.score'),
            mainModal : document.querySelector('.main_modal'),
            endScore : document.querySelector('.end_score'),
            btnNewGame : document.querySelector('.btnNewGame')
        };

function startGame() {
    domLinks.timer.innerHTML = `Timer:<br>5 sec`;
    domLinks.score.innerHTML = `Score:<br>0`;

    gameTimerId = setTimeout(function run() {
        arrCookie.push(new cookie());
        gameTimerId = setTimeout(run, getRandom(2000, 4000));
    }, getRandom(2000, 4000));

    timerId = setInterval(()=>{
        domLinks.timer.innerHTML = `Timer:<br>${timer -= 1} sec`;
        if (timer == 0) {
            stopGame();
        }
    }, 1000);
}

function stopGame() {
    clearTimeout(gameTimerId);
    clearInterval(timerId);
    arrCookie.forEach((el)=> clearTimeout(el.timeId));
    domLinks.mainModal.style.display = 'block';
    domLinks.endScore.innerHTML = `Score: ${score}`;
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

domLinks.btnNewGame.addEventListener('click', ()=> location.reload());

domLinks.blackHole.addEventListener('dragover', (ev)=> ev.preventDefault());

domLinks.blackHole.addEventListener('drop', (ev) =>{
    ev.preventDefault();
    let num = ev.dataTransfer.getData("num"),
        cookie = arrCookie[num];

    domLinks.timer.innerHTML = `Timer:<br>${timer += 4} sec`;
    domLinks.score.innerHTML = `Score:<br>${score += cookie.points}`;
    cookie.death();
})

class cookie {
    constructor(){
        this.domElement = this.createDomElement();
        this.pos = this.randomPosition();
        this.render();
        this.timeId = setTimeout(() => this.death(), 7000);
        this.domElement.addEventListener('dragstart',()=> event.dataTransfer.setData("num", arrCookie.indexOf(this)));
    }

    createDomElement(){
        const cookie = document.createElement('div');
        const rnd = getRandom(1, 100);
        if (rnd > 0 && rnd < 11) {
            cookie.classList.add('star');
            this.points = 11;
        } else if (rnd > 10 && rnd < 31){
            cookie.classList.add('sun');
            this.points = 7;
        } else{
            cookie.classList.add('moon');
            this.points = 3;
        }
        cookie.setAttribute('draggable','true');
        return cookie;
    }

    randomPosition(){
        const pos = {top: 0, left: 0};
        
        if (this.domElement.classList.contains('star')) {
            do {
                pos.top = getRandom(45, domLinks.wrapper.offsetHeight - 85);
                pos.left = getRandom(15, domLinks.wrapper.offsetWidth - 85);
            } while ((pos.top > domLinks.blackHole.offsetTop - 100 && pos.top < domLinks.blackHole.offsetTop + 130) &&
                    (pos.left > domLinks.blackHole.offsetLeft - 100 && pos.left < domLinks.blackHole.offsetLeft + 130));
        } else if (this.domElement.classList.contains('sun')){
            do {
                pos.top = getRandom(30, domLinks.wrapper.offsetHeight - 80);
                pos.left = getRandom(0, domLinks.wrapper.offsetWidth - 80);
            } while (pos.top > (domLinks.blackHole.offsetTop - 95) && pos.top < (domLinks.blackHole.offsetTop + 115) &&
                    pos.left > (domLinks.blackHole.offsetLeft - 95) && pos.left < (domLinks.blackHole.offsetLeft + 115));
        } else if (this.domElement.classList.contains('moon')){
            do {
                pos.top = getRandom(30, domLinks.wrapper.offsetHeight - 80);
                pos.left = getRandom(0, domLinks.wrapper.offsetWidth - 40);
            } while (pos.top > (domLinks.blackHole.offsetTop - 95) && pos.top < (domLinks.blackHole.offsetTop + 115) &&
                    pos.left > (domLinks.blackHole.offsetLeft - 55) && pos.left < (domLinks.blackHole.offsetLeft + 115));
        }
        return pos;
    }

    render(){
        this.domElement.style.top = `${this.pos.top}px`;
        this.domElement.style.left = `${this.pos.left}px`;
        domLinks.wrapper.append(this.domElement);
    }

    death(){
        this.domElement.remove();
    }
}

startGame();