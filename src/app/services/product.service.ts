import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';
import { Review } from '../interfaces/review';

export interface ProductRating {
  rating_id: number;
  product_id: number;
  average_rating: number;
  rating_count: number;
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'http://localhost:3001/'; //URL base del endpoint
  private apiUrlProducts = 'api/product/ratings/' //URL para productos
  private apiReview = 'api/review/' //URL para reviews

  constructor(private http: HttpClient) {}

//Obtiene todos los productos con sus valoraciones desde el backend.
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}${this.apiUrlProducts}`);
  }

//Obtiene información de un producto específico.
  getProductById(product_id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}${this.apiUrlProducts}${product_id}`);
  }

//Obtiene las reseñas de un producto especifico.
  getReviewsByProductId(product_id: number): Observable<Review[]> {
    return this.http.get<Review[]>(`${this.apiUrl}${this.apiReview}${product_id}`);
  }

//Agrega una reseña a un producto.
  addReview(review: Review): Observable<Review> {
    return this.http.post<Review>(`${this.apiUrl}${this.apiReview}`, review);
  }
}