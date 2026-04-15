import { Component, inject, OnInit } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { ProductService } from '../../../services/products';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ProductResponse {
  data: any[];
}

@Component({
  selector: 'app-products',
  imports: [CommonModule, FormsModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class ProductsComponent implements OnInit {
  private productService = inject(ProductService);

  products: any[] = [];
  showForm = false;
  editingProduct: any = null;

  form = { name: '', price: 0, description: '' };

ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe({
      next: (res: any) => this.products = res.data,
      error: (err: any) => console.error(err)
    });
  }

  openCreate(): void {
    this.editingProduct = null;
    this.form = { name: '', price: 0, description: '' };
    this.showForm = true;
  }

  openEdit(product: any): void {
    this.editingProduct = product;
    this.form = { name: product.name, price: product.price, description: product.description };
    this.showForm = true;
  }

  saveProduct(): void {
    if (this.editingProduct) {
      this.productService.updateProduct(this.editingProduct._id, this.form).subscribe({
        next: () => { this.loadProducts(); this.showForm = false; },
        error: (err: any) => console.error(err)
      });
    } else {
      this.productService.createProduct(this.form).subscribe({
        next: () => { this.loadProducts(); this.showForm = false; },
        error: (err: any) => console.error(err)
      });
    }
  }

  deleteProduct(id: string): void {
    if (confirm('¿Eliminar este servicio?')) {
      this.productService.deleteProduct(id).subscribe({
        next: () => this.loadProducts(),
        error: (err: any) => console.error(err)
      });
    }
  }

  cancelForm(): void {
    this.showForm = false;
    this.editingProduct = null;
  }
}
