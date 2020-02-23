// 1) Раз в секунду появляются шарики диаметром от 50px до 100px вверху экрана, в случайном месте.
// 2) Каждый шарик случайного цвета из радуги.
// 3) Каждые полсекунды каждый шарик двигается вниз на расстояние от 5px до 20px
// 4) При клике на шарик, он удаляется и счет игрока увеличивается на 1 очко.
// 5) При касании нижней части экрана, шарик удаляется и счет игрока уменьшается на 5 очков.



  let score = 0,
      life = 100;

  const ballsTimer = [],
        ballsGen = [],
        parent = document.querySelector('.game'),
        scorePoints = document.querySelector('.score'),
        lifePoints = document.querySelector('.life'),
        engGame = document.querySelector('.main_modal'),
        endScore = document.querySelector('.end_score'),
        btnClose = document.querySelector('.closeModal'),
        intro = document.querySelector('.sound');


  function laughter(){ //Создаём Чудо смех
    evil = new Audio(); // Создаём новый элемент Audio
    evil.src = './song/evil.mp3'; // Указываем путь к звуку "клика"
    evil.autoplay = true; // Автоматически запускаем
  }

  function soundClick() { //Создаём звук выстрела
      let shot = new Audio();
      shot.src = './song/shot.mp3'; 
      shot.autoplay = true; 
  }        

              //Генератор шаров
  function ballGenerator(){
      //каждую секунду создавать элемент Ball
      const gen = setInterval(()=> new Ball(), 500);
      ballsGen.push(gen);
      // soundClick();
  }

  function updateScore(numScore, numLife){
    score += numScore;
    life -= numLife;
    scorePoints.innerText = `Score: ${score}`; //Счётчик попаданий
    lifePoints.innerText = `Life points: ${life}`; //Счётчик жизни
    if(life < 1) stopGame();
  }

  function stopGame(){
    engGame.style.display = 'block';
    endScore.innerText = `You scored ${score} points`;
    ballsGen.forEach((el)=> clearInterval(el));
    ballsTimer.forEach((el)=> clearInterval(el));
    intro.remove();
    laughter(); //Чудо смех )))
  }

  btnClose.addEventListener('click', ()=>{
    engGame.style.display = 'block';
    window.location.reload();
  });

class Ball{
  constructor(){
      const colors = ['red', 'orange', 'yellow', 'green', '#3BA3D0', 'blue', 'purple'];
      //создается элемент Шарик
      this.ball = document.createElement('div');
      //генерируется случайный диаметр от 50 до 100 пикселей
      this.width = this.random(50, 101);
      this.ball.style.width = this.width + 'px';
      this.ball.style.height = this.width + 'px';
      //выбирается случайный цвет из 7 доступных
      this.ball.style.backgroundColor = colors[this.random(0, 7)];
      //генерируется шаг шарика от 5 до 20 пикселей и записывается в свойство "ШАГ"
      this.step = this.random(5, 21);
      //генерируется стартовое состояние left от 0 до края экрана
      this.ball.style.left = this.random(0, parent.offsetWidth - this.width - 5) + 'px';
      //top свойство задается = 0
      this.top = 0;
      //на шарик вешается слушатель действия "Клик"
      this.ball.addEventListener('click', ()=> this.click());
      //шарик добавляется родительскому элементу
      parent.appendChild(this.ball);
      //создать интервал в 0.5 секунды и повесить обработчик метод "шаг"
      this.interval = setInterval(()=> this.goStep(), 100);
      ballsTimer.push(this.interval);
  }

  random(min = 1, max = 100){
    return Math.floor(Math.random() * (max - min) + min);
  }

              //Метод "ШАГ"
  goStep(){
    this.top += this.step;
    //шарик двигается на расстояние "ШАГ"
    this.ball.style.top = this.top + 'px';
    //проверяем, достигли ли мы границы экрана
    if(this.top > parent.offsetHeight){
        //если достигли, то запускаем метод "ПРОВТЫКАЛ"
        this.fail();
    }
  }

              //метод "КЛИК"
  click(){
      //добавить в счет пользователю 1 очко
      updateScore(Math.round(8 - this.width / 20), 0);
      //удалить шарик(вызвать метод "СМЕРТЬ")
      soundClick();
      this.death();
  }

              //метод "ПРОВТЫКАЛ"
  fail(){
      //отнять 5 очков из счета игрока
      updateScore(0, Math.round(this.width / 10));
      //удалить шарик(вызвать метод "СМЕРТЬ")
      this.death();
  }

              //метод "СМЕРТЬ"
  death(){
      //удаляет шарик
      this.ball.remove();
      clearInterval(this.interval);
  }
}

ballGenerator();

scorePoints.innerText = `Score: ${score}`;
lifePoints.innerText = `Life points: ${life}`;