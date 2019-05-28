import { Component } from '@angular/core';
import { CommonApiService } from './common-api.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public app = 0;
  cc;
  url;
  public prd: any;

  constructor(public commonApiService: CommonApiService, private http: HttpClient) {
    // this.app = 1;
// tslint:disable-next-line: no-unused-expression
    // this.getCarousel;
    this.url = 'http://180.149.241.208:3000/api/';
    // this.getCarousel;
    // console.log(this.http.get( this.url + filter ));
    this.prd = [
      {
        'product_name': 'Fonteyn Study Table',
        'categoryId': '5975eadf9fd2891810282303',
        'product_producer': 'urban ladder',
        'product_description': 'On pointe. Perfectly balanced, the Fonteyn study table has a distinctive leg detail, unique to the range. The spacious table has wooden panel slats so you can configure and move the shelves to where you need it. Designed to help you make the most of the work surface, the table comes with a cup holder, so your mug of coffee (or tea) fits snuggly in the groove, reducing the chance of spills across documents or your laptop. The leatherette pouch is detachable as well, so you can move it or remove it, as you please.',
        'product_cost': 6000,
        'product_avg_rating': 3.6666666666666665,
        'product_stock': 150,
        'product_created_date': '2017-07-25T10:26:08.678Z',
        'product_color': {
          '_id': '598841c60e13e2c8f5c9969a',
          'color_parent': 'brown',
          'color_name': 'brown',
          'color_code': '#a52a2a'
        },
        'product_dimension': '37*47',
        'product_isactive': true,
        'product_material': 'wood,metal',
        'id': '59771cc0ee32740640a49f5b',
        'rating': 0
      },
      {
        'product_name': 'Twain Study Table',
        'categoryId': '5975eadf9fd2891810282303',
        'product_producer': 'Alibaba',
        'product_description': 'Full marks. A classic desk with pared down trestle legs, the Twain study table is elegant in its simplicity. The generous table has room for you to spread out, and the two deep drawers help keep a check on overflowing papers, files, and more. There’s plenty of space below for legs to stretch comfortably.  ',
        'product_cost': 6000,
        'product_avg_rating': 4,
        'product_stock': 300,
        'product_created_date': '2017-07-25T10:29:43.413Z',
        'product_color': {
          '_id': '598841d50e13e2c8f5c9969b',
          'color_parent': 'gray',
          'color_name': 'gray',
          'color_code': '#9fa8ab'
        },
        'product_dimension': '28*44',
        'product_isactive': true,
        'product_material': 'Engineered Wood',
        'id': '59771d97ee32740640a49f5d'
      },
      {
        'product_name': 'Robert Recliner Sofa Set',
        'categoryId': '5975eb4d9fd2891810282305',
        'product_producer': 'somu stores',
        'product_description': 'A lot of care has gone into choosing the materials that go into making your sofa. And with continued care, they will share your address for many years.',
        'product_cost': 40000,
        'product_avg_rating': 3.6153846153846154,
        'product_stock': 21000,
        'product_created_date': '2017-07-25T10:37:01.353Z',
        'product_color': {
          '_id': '598842e00e13e2c8f5c996a8',
          'color_parent': 'brown',
          'color_name': 'rosy brown',
          'color_code': '#bc8f8f'
        },
        'product_dimension': '84*40',
        'product_isactive': true,
        'product_material': 'Fibre-filled ,wood',
        'id': '59771f4dee32740640a49f5f'
      },
      {
        'product_name': 'Robinson  ',
        'categoryId': '5975eb0a9fd2891810282304',
        'product_producer': 'somu stores',
        'product_description': 'Smart style. The Robinson bed set is made for comfortable sleep. The curved headboard is made with a designer dual tone finish. The central console is curved with a premium laminate finish. The bed comes with standard with Hydraulic & Manual storage for a complete storage solution. The box cut design and finish ensure that this bed is made for the modern Indian home. Pair this bed with its matching nightstand, chest of drawers and a choice of wardrobes for the complete bedroom set.',
        'product_cost': 40000,
        'product_avg_rating': 3.6153846153846154,
        'product_stock': 1000,
        'product_created_date': '2017-07-25T10:43:57.726Z',
        'product_color': {
          '_id': '5988433c0e13e2c8f5c996ab',
          'color_parent': 'brown',
          'color_name': 'saddle brown',
          'color_code': '#8b4513'
        },
        'product_dimension': '206*30',
        'product_isactive': true,
        'product_material': 'Matte',
        'id': '597720edee32740640a49f61'
      },
      {
        'product_name': 'Apollo Sectional Sofa',
        'categoryId': '5975eb4d9fd2891810282305',
        'product_producer': 'urban ladder',
        'product_description': 'A lot of care has gone into choosing the materials that go into making your sofa. And with continued care, they will share your address for many years.',
        'product_cost': 50000,
        'product_avg_rating': 3.6153846153846154,
        'product_stock': 200,
        'product_created_date': '2017-07-27T10:30:11.145Z',
        'product_color': {
          '_id': '598842330e13e2c8f5c996a0',
          'color_parent': 'brown',
          'color_name': 'beige',
          'color_code': '#f5f5dc'
        },
        'product_dimension': '84*23',
        'product_isactive': true,
        'product_material': 'wood,metal',
        'id': '5979c0b34318b87b9f7db6ee'
      },
      {
        'product_name': 'Winchester Fabric Sofa',
        'categoryId': '5975eb4d9fd2891810282305',
        'product_producer': 'urban ladder',
        'product_description': 'Since sofas are manufactured against your order, we require you to pay an advance of 25% of the total amount. We will collect the balance (through the card on delivery option) when we deliver the product. However, if you want to pay in full (to avail of credit card EMI, for instance), please call us at 080-67400200 (Monday-Saturday, 10AM-8PM) and we can help you out.',
        'product_cost': 59999,
        'product_avg_rating': 3.6153846153846154,
        'product_stock': 200,
        'product_created_date': '2017-07-27T12:29:34.440Z',
        'product_color': {
          '_id': '598841310e13e2c8f5c99692',
          'color_parent': 'blue',
          'color_name': 'navy blue',
          'color_code': '#3c4477'
        },
        'product_dimension': '84*28',
        'product_isactive': true,
        'product_material': 'Cobalt,metal',
        'id': '5979dcaeceb806ca023cbf4b'
      },
      {
        'product_name': 'Ursula Lounge Chair',
        'categoryId': '5975eaa79fd2891810282302',
        'product_producer': 'Ursula',
        'product_description': 'Wrap around. Designed to embrace the sitter, the Ursula lounge chair’s enveloping frame comes in four lovely colours. The vibrant upholstery adds a contemporary flair to your space and thanks to its unique silhouette, there’s plenty of visual drama. The solid wooden base and slim, angled legs are the perfect complement to the sweeping curves.',
        'product_cost': 13999,
        'product_avg_rating': 3.6153846153846154,
        'product_stock': 100,
        'product_created_date': '2017-08-03T10:34:38.542Z',
        'product_color': {
          '_id': '598842200e13e2c8f5c9969f',
          'color_parent': 'blue',
          'color_name': 'teal',
          'color_code': '#008080'
        },
        'product_dimension': '50*44',
        'product_isactive': true,
        'product_material': 'Rubberwood',
        'id': '5982fc3eca395d99207e11e7',
        'product_img': []
      },
      {
        'product_name': 'Cooper Rocker Recliner',
        'categoryId': '5975eaa79fd2891810282302',
        'product_producer': 'Urban ladder',
        'product_description': 'Bring home the comfortably chic Cooper Recliner to add comfort to everyday living',
        'product_cost': 20999,
        'product_avg_rating': 3.6153846153846154,
        'product_stock': 100,
        'product_created_date': '2017-08-04T13:55:24.710Z',
        'product_color': {
          '_id': '5988436a0e13e2c8f5c996ad',
          'color_parent': 'brown',
          'color_name': 'tan',
          'color_code': '#d2b48c'
        },
        'product_dimension': '36*27',
        'product_isactive': true,
        'product_material': 'Artificial leather',
        'id': '59847ccccf58c7ddc4012916'
      },
      {
        'product_name': 'Danum Swing Chair',
        'categoryId': '5975eaa79fd2891810282302',
        'product_producer': 'urban ladder',
        'product_description': 'A comfortable enclosing swing chair\nThe brown artificial rattan and tan cushion fabric are both weather-proof',
        'product_cost': 14000,
        'product_avg_rating': 3.6153846153846154,
        'product_stock': 200,
        'product_created_date': '2017-08-09T08:16:56.051Z',
        'product_color': {
          '0': '#',
          '1': '9',
          '2': '9',
          '3': '6',
          '4': '6',
          '5': '3',
          '6': '3'
        },
        'product_dimension': '39*72',
        'product_isactive': true,
        'product_material': 'fabric,metal',
        'id': '598ac4f81cb602136ab86cea'
      },
      {
        'product_name': 'Mou Bed With Mattress',
        'categoryId': '5975eb0a9fd2891810282304',
        'product_producer': 'urban ladder',
        'product_description': 'Make your mou. Part bed, part mattress, the Mou mattress bed is easy to put together, easy to move, and easy to sleep in. Use it in your bedroom in place of a full-sized bed or in your living room as a daybed. You can also detach the mattress and place it directly on the floor, should you so prefer it. The elegant stitch detailing means you can do away with bedsheets, and bedcovers even. Plus, its removable cover is machine-washable, so you can eat in bed without having to worry about spills or stains.',
        'product_cost': 16000,
        'product_avg_rating': 3.6153846153846154,
        'product_stock': 200,
        'product_created_date': '2017-08-09T08:22:10.013Z',
        'product_color': {
          '0': '#',
          '1': '9',
          '2': '9',
          '3': '6',
          '4': '6',
          '5': '3',
          '6': '3'
        },
        'product_dimension': '78*8',
        'product_isactive': true,
        'product_material': 'wood,metal,fabric',
        'id': '598ac6321cb602136ab86cee'
      },
      {
        'product_name': 'Apollo Sectional Sofa green',
        'categoryId': '5975eb4d9fd2891810282305',
        'product_producer': 'urban ladder',
        'product_description': 'While we do a Quality Check at our end for colour matching, a 5-10% variation in colour may appear in a batch depending upon conditions of production. As an industry standard, we allow for a maximum of a 10% variation.',
        'product_cost': 50000,
        'product_avg_rating': 3.6153846153846154,
        'product_stock': 200,
        'product_created_date': '2017-08-09T08:45:57.423Z',
        'product_color': {
          '0': '#',
          '1': '0',
          '2': '0',
          '3': 'f',
          '4': 'f',
          '5': '0',
          '6': '0'
        },
        'product_dimension': '78*24',
        'product_isactive': true,
        'product_material': 'wood,metal',
        'id': '598acbc51cb602136ab86cf2'
      },
      {
        'product_name': 'Blaine Wall Mounted Dining Table',
        'categoryId': '5975eadf9fd2891810282303',
        'product_producer': 'urban ladder',
        'product_description': 'Ace of space. Super compact and smart, the Blaine dining table makes for a modern, functional piece of design. Perfect for homes where space is a premium, this lightweight table can be wall mounted and folded, to let you sneak a dining area into your living room. Pair it with complementing chairs, for a cosy, cafe-like set-up right at home.',
        'product_cost': 6000,
        'product_avg_rating': 3.6153846153846154,
        'product_stock': 300,
        'product_created_date': '2017-08-09T11:27:55.410Z',
        'product_color': {
          'color_parent': 'brown',
          'color_name': 'saddle brown',
          'color_code': '#8b4513',
          'id': '5988433c0e13e2c8f5c996ab'
        },
        'product_dimension': '23*20',
        'product_isactive': true,
        'product_material': 'wood,metal',
        'id': '598af1bbafaa6fa490e3f6c7'
      },
      {
        'product_name': 'Chair22',
        'categoryId': '5975eaa79fd2891810282302',
        'product_producer': 'Diman',
        'product_description': 'Diman Shops',
        'product_cost': 5670,
        'product_avg_rating': 3.6153846153846154,
        'product_stock': 3,
        'product_created_date': '2018-11-26T10:15:45.517Z',
        'product_color': {
          'color_parent': 'blue',
          'color_name': 'blue',
          'color_code': '#0074d9',
          'id': '5988411c0e13e2c8f5c99691'
        },
        'product_dimension': '300*40',
        'product_isactive': true,
        'product_material': 'wood',
        'id': '5bfbc7d1d82122c2538d6340'
      }
    ]
  }

// tslint:disable-next-line: use-life-cycle-interface
  // ngOnInit() {
  //   this.commonApiService.getCarousel()
  //   .subscribe((data) => this.cc = data);
  //   console.log(this.cc);
  // }

  ngOnInit() {
    const filter = 'categories?filter={"include":"images"}';
    this.http.get( this.url + filter )
    .subscribe((res) => {
     console.log(res);
     this.cc = res;
    });

    console.log(this.prd);
  }

  // getCarousel() {
  //   this.cc = this.commonApiService.getCarousel();
  //   console.log(this.cc);
  // }

}
