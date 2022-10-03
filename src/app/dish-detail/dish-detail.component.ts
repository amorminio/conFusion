import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';

const DISHES:Dish[] = [
  {
    id: '0',
    name: 'Uthappizza',
    image: '/assets/images/uthappizza.png',
    category: 'mains',
    featured: true,
    label: 'Hot',
    price: '4.99',
    // tslint:disable-next-line:max-line-length
    description: 'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
    comments :[
      {
        text:'Muito Baum esse prato !',
        rank:5,
        author:'Goku',
        date:'20220129'
      },
      {
        text:'Parabéns ! Esse prato está demais!',
        rank:5,
        author:'Gohan',
        date:'20220129'
      },
      {
        text:'Uma merda!',
        rank:1,
        author:'Radits',
        date:'20220129'
      },
  ]

  },
  {
    id: '1',
    name: 'Zucchipakoda',
    image: '/assets/images/zucchipakoda.png',
    category: 'appetizer',
    featured: false,
    label: '',
    price: '1.99',
    description: 'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce',
    comments : {
      text:'Verme Maldito !',
      rank:2,
      author:'Vegeta',
      date:'20220305'
    }
  },
  {
    id: '2',
    name: 'Vadonut',
    image: '/assets/images/vadonut.png',
    category: 'appetizer',
    featured: false,
    label: 'New',
    price: '1.99',
    description: 'A quintessential ConFusion experience, is it a vada or is it a donut?',
    comments : {
      text:'Tive diarréia e morri ! Vou precisar de esferas do dragão !',
      rank:1,
      author:'Kuririn',
      date:'20200305'
    }
  },
  {
    id: '3',
    name: 'ElaiCheese Cake',
    image: '/assets/images/elaicheesecake.png',
    category: 'dessert',
    featured: false,
    label: '',
    price: '2.99',
    description: 'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms',
    comments : [{
      text:'Eu não como gororobas !',
      rank:0,
      author:'Picholo',
      date:'20210712'
    }]
  }
]

@Component({
  selector: 'dish-detail',
  templateUrl: './dish-detail.component.html',
  styleUrls: ['./dish-detail.component.scss']
})
export class DishDetailComponent implements OnInit {

  selectedDish:Dish = DISHES[0]

  constructor() { }

  ngOnInit(): void {
  }

}
