import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { take } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class DashboardComponent implements OnInit {
  products: any[] = []; //Variable para almacenar los productos.

  constructor(private _productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this._productService.getProducts().pipe(take(1)).subscribe({
      next: (response: any) => {
        this.products = response.products || response; //Ajusta según la respuesta.
      },
      error: (error) => {
        console.error('Error al obtener productos:', error);
      },
    });
  }

  viewProduct(product_id: number): void {
    this.router.navigate(['/product', product_id]); //Navega a la ruta de detalle.
  }
}