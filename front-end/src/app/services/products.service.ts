import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products: Product[] = [
      { id: 1, name: "Nvidia GeForce RTX 4090", price: 1800,cat:'GPU', description: "Description du Produit 1", image: "https://assets.nvidia.partners/images/png/GeForce-RTX4090-Back.png" },
      { id: 2, name: "Nvidia GeForce RTX 4080", price: 1330,cat:'GPU', description: "Description du Produit 2", image: "https://assets.nvidia.partners/images/png/GeForce-RTX4080-Back.png" },
      { id: 3, name: "AMD Radeon RX 6700 XT", price: 630,cat:'GPU', description: "Description du Produit 3", image: "https://m.media-amazon.com/images/I/51IyyZACU7L._AC_SX679_.jpg" },
      { id: 4, name: "Intel Core i5-13400F", price: 180,cat:'CPU', description: "Description du Produit 4", image: "https://static.fnac-static.com/multimedia/Images/C9/8C/92/14/21571785-3-1541-1/tsp20230131160248/Proceeur-Intel-Core-i5-13400F-BX8071513400F-10-Coeurs-2-5GHz-65W-20Mo-Cache.jpg" },
      { id: 5, name: "AMD Ryzen 5 5600X", price: 180,cat:'CPU', description: "Description du Produit 5", image: "https://m.media-amazon.com/images/I/61twhaihHtL.__AC_SY300_SX300_QL70_ML2_.jpg" },

    // Ajoutez d'autres produits de test ici sans la propriété 'quantity'
  ];


  constructor() { }

  getProducts(): Product[] {
    return this.products;
  }
}
