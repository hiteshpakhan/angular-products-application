import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/api/products/product.service';
import { ProductRepresentation } from '../services/api/models/product-representation';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  // param: any;
  // queryParam: any;
  products: ProductRepresentation[] = [];

  constructor( private service: ProductService){}
  // constructor(private activatedRoute: ActivatedRoute, private service: ProductService){}

  ngOnInit(): void {
    // this.param = this.activatedRoute.snapshot.params['username'];
    // this.queryParam = this.activatedRoute.snapshot.queryParams['course'];


    // this.service.getAllProductsWithinLimit()
    // .subscribe({
    //   next: (data) => {
    //     console.log(data);
    //   }
    // })

    // const product: ProductRepresentation = {
    //   title: 'MyProduct1',
    //   description: 'desc 1',
    //   category: 'cat 1',
    //   price: 12,
    //   image: 'url of image'
    // }

    // this.service.createProduct(product).subscribe({
    //   next: (result) => {
    //     console.log(result);
    //   },
    //   error: (error) => {
    //     // console.log(error);

    //     //we can also choose4 by if else statement what we want to show
    //     if (error instanceof ErrorEvent) {
    //       console.error('an error occored', error.message);
    //     } else {
    //       //server side error
    //       console.error("server returned status code ",error.status ,'an error occored', error.message);
    //     }
    //   }
    // })
    this.service.getAllProductsWithinLimit()
    .subscribe({
      next: (result) => {
        // console.log(result);
        this.products = result;
      },
      error: (error) => {
        // console.log(error);

        //we can also choose4 by if else statement what we want to show
        if (error instanceof ErrorEvent) {
          console.error('an error occored', error.message);
        } else {
          //server side error
          console.error("server returned status code ",error.status ,'an error occored', error.message);
        }
      }
    })
  }

}
