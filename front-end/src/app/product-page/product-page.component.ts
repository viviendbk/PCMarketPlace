import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { ProductsService } from '../services/products.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  products: Product[] = [];

  constructor(private cartService: CartService, private productsService: ProductsService) { }

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
    alert('Produit ajouté au panier!');
  }
}
