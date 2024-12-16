import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Review } from '../../interfaces/review';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {
  product: any; // Variable para almacenar los datos del producto.
  reviews: Review[] = []; // Para almacenar las valoraciones del producto.

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const product_id = this.route.snapshot.paramMap.get('product_id'); // Obtiene el ID del producto desde la URL.
    console.log('ID del producto capturado desde la URL:', product_id);
    if (product_id) {
      this.loadProduct(parseInt(product_id, 10)); // Carga los datos del producto.
      this.loadReviews(parseInt(product_id, 10));
    }
  }

  loadProduct(product_id: number): void {
    this.productService.getProductById(product_id).subscribe({
      next: (product) => {
        console.log('Producto cargado desde la API:', product);
        this.product = product; // Almacena los datos del producto.
      },
      error: (err) => console.error('Error al cargar producto:', err),
    });
  }

  goBack(): void {
    this.router.navigate(['/']); // Navega al listado principal.
  }

  loadReviews(product_id: number): void {
    this.productService.getReviewsByProductId(product_id).subscribe({
      next: (reviews: Review[]) => {
        this.reviews = reviews; // Almacena las valoraciones.
        console.log('Valoraciones cargadas:', reviews); // Para depuración.
      },
      error: (err) => console.error('Error al cargar valoraciones:', err),
    });
  }
}
