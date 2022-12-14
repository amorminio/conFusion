import { Component, Input, OnInit } from '@angular/core'
import { Params,ActivatedRoute } from '@angular/router'
import { Location } from '@angular/common'
import { Dish } from '../shared/dish'
import { DishService } from '../services/dish.service'

@Component({
  selector: 'dish-detail',
  templateUrl: './dish-detail.component.html',
  styleUrls: ['./dish-detail.component.scss']
})
export class DishDetailComponent implements OnInit {


  @Input()
  dish: Dish = new Dish;


  constructor(
		private dishService:DishService,
		private route:ActivatedRoute,
		private location:Location
	) { }

  ngOnInit(): void {
		let id = this.route.snapshot.params ['id']
		this.dish = this.dishService.getDish(id)
  }

  testDish():boolean{
    if (this.dish.name ===''){
      return false
    }
    return true
  }

	goBack() : void{
		this.location.back();
	}



}
