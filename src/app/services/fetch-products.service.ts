import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import ProductEntity from '../entities/Product.entity';
const configUrl = 'assets/products.json';
@Injectable({
  providedIn: 'root',
})
export class FetchProductsService {
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<ProductEntity[]>(configUrl);
  }
}
