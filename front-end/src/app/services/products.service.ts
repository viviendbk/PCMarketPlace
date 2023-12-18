import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products: Product[] = [
      { id: 1, name: "Produit 1", price: 100, description: "Description du Produit 1", image: "url-de-l-image-1" },
      { id: 2, name: "Produit 2", price: 200, description: "Description du Produit 2", image: "url-de-l-image-2" },
    // Ajoutez d'autres produits de test ici sans la propriété 'quantity'
  ];


  constructor() { }

  getProducts(): Product[] {
    return this.products;
  }
}
