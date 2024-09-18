import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductRepresentation } from '../models/product-representation';
// import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'https://fakestoreapi.com/'

  constructor(private http: HttpClient){ //here we are injecting service of http client module  
    
  }

  getAllProductsWithinLimit(limit: number = 5){ //always rembebar that the return type of this will be observiable<object>
    // const productsUrl: string = this.baseUrl + 'products?limit=5';
    const productsUrl: string = `${this.baseUrl}products?limit=${limit}`;
    return this.http.get<ProductRepresentation[]>(productsUrl);
  }

  createProduct(product: ProductRepresentation){
    const productsUrl: string = `${this.baseUrl}products`;
    return this.http.post<ProductRepresentation>(productsUrl, product);
  }
}
