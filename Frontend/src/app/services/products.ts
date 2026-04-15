import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class ProductService  {
private httpClient = inject(HttpClient);
private apiUrl = 'http://localhost:3000/products';

  constructor(private http: HttpClient) {}


  getProducts(): Observable<{data: any[]}> {
  return this.httpClient.get<{data: any[]}>(this.apiUrl);
  }

  createProduct(product: any) {
    return this.http.post(this.apiUrl, product);
  }

  updateProduct(id: string, product: any) {
    return this.http.put(`${this.apiUrl}/${id}`, product);
  }

  deleteProduct(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

}
