import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: Product[] = [];

  constructor() {
    this.loadCartItems();
  }

  addToCart(product: Product): void {
    this.items.push(product);
    this.saveCartItems();
  }

  removeFromCart(product: Product): void {
    this.items = this.items.filter(item => item.id !== product.id);
    this.saveCartItems();
  }

  getItems(): Product[] {
    return this.items;
  }

  private saveCartItems(): void {
    localStorage.setItem('cart', JSON.stringify(this.items));
  }

  getTotalPrice(): number {
    return this.items.reduce((total, item) => total + item.price, 0);
  }

  private loadCartItems(): void {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      this.items = JSON.parse(savedCart);
    }
  }
}
