import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { ProductService } from '../services/api/products/product.service';
// import { ProductRepresentation } from '../services/api/models/product-representation';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
// export class AboutComponent implements OnInit {
  // param: any;
  // queryParam: any;

  // constructor(private activatedRoute: ActivatedRoute, private service: ProductService){}

  // ngOnInit(): void {
  //   this.param = this.activatedRoute.snapshot.params['username'];
  //   this.queryParam = this.activatedRoute.snapshot.queryParams['course'];

  //   // this.service.getAllProductsWithinLimit()
  //   // .subscribe({
  //   //   next: (data) => {
  //   //     console.log(data);
  //   //   }
  //   // })

  //   const product: ProductRepresentation = {
  //     title: 'MyProduct1',
  //     description: 'desc 1',
  //     category: 'cat 1',
  //     price: 12,
  //     image: 'url of image'
  //   }

  //   this.service.createProduct(product).subscribe({
  //     next: (result) => {
  //       console.log(result);
  //     },
  //     error: (error) => {
  //       // console.log(error);

  //       //we can also choose4 by if else statement what we want to show
  //       if (error instanceof ErrorEvent) {
  //         console.error('an error occored', error.message);
  //       } else {
  //         //server side error
  //         console.error("server returned status code ",error.status ,'an error occored', error.message);
  //       }
  //     }
  //   })
  // }
}
