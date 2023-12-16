import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: Product[] = [];

  constructor() { }

  addToCart(product: Product): void {
    this.items.push(product);
  }

  removeFromCart(product: Product): void {
    this.items = this.items.filter(item => item.id !== product.id);
  }

  getItems(): Product[] {
    return this.items;
  }

  getTotalPrice(): number {
    return this.items.reduce((total, item) => total + item.price, 0);
  }

  clearCart(): void {
    this.items = [];
  }
}
