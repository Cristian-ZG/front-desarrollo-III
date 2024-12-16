import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { take } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'], // Cambiado a plural.
  changeDetection: ChangeDetectionStrategy.Default,
})
export class DashboardComponent implements OnInit, OnDestroy {
  products: any[] = []; // Variable para almacenar los productos.
  private subscription: Subscription | null = null;

  constructor(private _productService: ProductService) {
    console.log('DashboardComponent constructor llamado');
  }

  ngOnInit(): void {
    this.loadProducts();
    console.log('ngOnInit ejecutado en DashboardComponent');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit ejecutado en DashboardComponent');
  }
  
  ngOnDestroy(): void {
    console.log('ngOnDestroy ejecutado en DashboardComponent');
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  loadProducts(): void {
    this._productService.getProducts().pipe(take(1)).subscribe({
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