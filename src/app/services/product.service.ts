import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Define interfaces opcionales para tipar los datos
export interface Product {
  product_id: number;
  name: string;
  description: string;
  price: number;
}

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
  private apiUrl = 'http://localhost:3001/api/product/ratings'; // URL base del endpoint

  constructor(private http: HttpClient) {}

  /**
   * Obtiene todos los productos con sus valoraciones desde el backend.
   */
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  /**
   * Obtiene información de un producto específico.
   * @param id El ID del producto a buscar.
   */
  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }

  /**
   * Crea un nuevo producto en el backend.
   * @param product Los datos del producto a crear.
   */
  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, product);
  }

  /**
   * Actualiza un producto existente.
   * @param id El ID del producto a actualizar.
   * @param product Los nuevos datos del producto.
   */
  updateProduct(id: number, product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.apiUrl}/${id}`, product);
  }

  /**
   * Elimina un producto por su ID.
   * @param id El ID del producto a eliminar.
   */
  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
