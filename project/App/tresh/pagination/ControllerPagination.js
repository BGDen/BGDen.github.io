import {ModelPagination} from "./ModelPagination.js";
import {ViewPagination} from "./ViewPagination.js";

export class ControllerPagination{
  constructor(){
    this.model = new ModelPagination();
    this.view = new ViewPagination();
  }
}