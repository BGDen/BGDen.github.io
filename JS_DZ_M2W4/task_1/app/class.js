class Circle{
  constructor(radius = 0){
    this._radius = radius;
  }
  get radius(){
    return this._radius;
  }
  set radius(r){
    this._radius = r;
  }
  get diameter(){
    return 2 * this._radius;
  }

  square(){
    return Math.PI * Math.pow(this._radius, 2);
  }
  len(){
    return Math.PI * this.diameter;
  }

}
