import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {Observable} from "rxjs";

import {Product} from "../../model/product.model";

import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
  }

  get list$(): Observable<Array<Product>> {
    return this.http.get<Array<Product>>(`${environment.apiHorse}/products`);
  }

  productById$(id: number): Observable<Product> {
    return this.http.get<Product>(`${environment.apiHorse}/products/${id}`);
  }

  post$(product: Product): Observable<Product> {
    return this.http.post<Product>(`${environment.apiHorse}/products`, product);
  }

  put$(id: number, product: Product): Observable<Product> {
    return this.http.put<Product>(`${environment.apiHorse}/products/${id}`, product);
  }

  delete$(id: number): Observable<Product> {
    return this.http.delete<Product>(`${environment.apiHorse}/products/${id}`);
  }
}
