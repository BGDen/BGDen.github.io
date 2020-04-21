export class Spinner{
  constructor(spinner,pos, speed){
      this.spinner = {s:spinner, c:0};
      this.counter = 0;
      this.pos = `.spin${pos}`;
      this.interval = false;
      this.speed = speed;
  }
  spin(){ 
      if(this.interval){
          clearInterval(this.interval);
      }
      this.interval = setInterval(()=>{
          document.querySelector(this.pos).innerHTML = this.spinner.s[this.spinner.c];
          this.spinner.c = (this.spinner.c + 1) % this.spinner.s.length;
      },this.speed);
  }

}