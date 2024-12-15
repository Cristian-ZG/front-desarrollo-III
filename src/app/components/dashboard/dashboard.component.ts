import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  providers: [ProductService],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'], // Cambiado a plural.
})
export class DashboardComponent implements OnInit {
  products: any[] = []; // Variable para almacenar los productos.

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe({
      next: (response: any) => {
        console.log('Respuesta de la API:', response); // Depuración.
        this.products = response.products || response; // Ajusta según la respuesta.
      },
      error: (error) => {
        console.error('Error al obtener productos:', error);
      },
    });
  }
}