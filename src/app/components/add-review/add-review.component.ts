import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Review } from '../../interfaces/review';
import { CommonModule } from '@angular/common';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-review',
  standalone: true,
  imports: [CommonModule, NgFor, FormsModule],
  templateUrl: './add-review.component.html',
  styleUrl: './add-review.component.css'
})
export class AddReviewComponent implements OnInit{
  review: Review = {
    product_id: 0,
    user_name: '',
    rating: 0,
    review_text: ''
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    const product_id = this.route.snapshot.paramMap.get('product_id');
    if (product_id) {
      this.review.product_id = parseInt(product_id, 10); // Asigna el product_id al objeto de valoración
    }
  }

  submitReview(): void {
    this.productService.addReview(this.review).subscribe({
      next: (response) => {
        console.log('Valoración agregada con éxito:', response);
        this.goBack(); // Regresa a la vista de detalles del producto
      },
      error: (err) => console.error('Error al agregar valoración:', err)
    });
  }

  goBack(): void {
    this.router.navigate(['/product', this.review.product_id]); // Redirige a la vista de detalles del producto
  }
}
