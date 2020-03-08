 export class Model{
   constructor(controller){
     this.controller = controller;
     this.arr = [];
    //  this.arr2 = [];
   }

   saveData(str){
     this.arr.push(str);
     localStorage.setItem('str', JSON.stringify(this.arr.reverse()));
   }

   getData(key){
     return JSON.parse(localStorage.getItem(key));
   }
 }