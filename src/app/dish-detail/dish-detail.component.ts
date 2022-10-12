import { Component, Input, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';

@Component({
  selector: 'dish-detail',
  templateUrl: './dish-detail.component.html',
  styleUrls: ['./dish-detail.component.scss']
})
export class DishDetailComponent implements OnInit {


  @Input()
  dish: Dish = new Dish;


  constructor() { }

  ngOnInit(): void {

  }

  testDish():boolean{
    if (this.dish.name ===''){
      return false
    }
    return true
  }



}
