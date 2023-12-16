import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  cartItems: Product[] = [];
  total = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getItems();
    this.total = this.cartService.getTotalPrice();
  }

  removeFromCart(product: Product): void {
    this.cartService.removeFromCart(product);
    this.updateCart();
  }

  updateCart(): void {
    this.cartItems = this.cartService.getItems();
    this.total = this.cartService.getTotalPrice();
  }

  checkout(): void {
    alert('Commande passée avec succès!');
  }
}
