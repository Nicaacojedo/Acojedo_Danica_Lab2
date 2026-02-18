import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products.html',
  styleUrls: ['./products.css']
})
export class Products {

  @Output() productAdded = new EventEmitter<any>();

  selectedCategory = 'All';
  showNotification = false;
  notificationMessage = '';

  products = [
    {
      name: 'iPhone 14',
      price: 55000,
      category: 'Apple',
      image: 'https://d1rlzxa98cyc61.cloudfront.net/catalog/product/cache/1801c418208f9607a371e61f8d9184d9/1/8/184948_2022.jpg'
    },
    {
      name: 'Samsung Galaxy S23',
      price: 48000,
      category: 'Samsung',
      image: 'https://images-cdn.ubuy.co.in/6938f63c18c4f72cf80750c2-samsung-galaxy-s23-ultra-5g-sm-s918b-ds.jpg'
    },
    {
      name: 'Xiaomi Redmi Note 12',
      price: 15000,
      category: 'Xiaomi',
      image: 'https://electroworld.abenson.com/media/catalog/product/1/8/187601_2023_14.jpg'
    },
    {
      name: 'Realme C55',
      price: 12500,
      category: 'Realme',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6uoiRgfmbUjks2ph8MRsmshgfHtaVM8dooA&s'
    }
  ];

  get filteredProducts() {
    if (this.selectedCategory === 'All') {
      return this.products;
    }
    return this.products.filter(p => p.category === this.selectedCategory);
  }

  addToCart(product: any) {
    this.productAdded.emit(product);

    this.notificationMessage = product.name + ' added to cart!';
    this.showNotification = true;

    setTimeout(() => {
      this.showNotification = false;
    }, 2500);
  }
}
