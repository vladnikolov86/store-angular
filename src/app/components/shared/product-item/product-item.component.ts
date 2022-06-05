import { Component, Input, OnInit } from '@angular/core';
import ProductEntity from 'src/app/entities/Product.entity';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  modelLabel = 'Model: ';
  manufacturerLabel = 'Manufacturer: ';
  @Input() product: ProductEntity = {
    id: 0,
    manufacturer: '',
    name: '',
    price: 0,
    rating: 0,
    image: '',
  };
  constructor() {}

  ngOnInit(): void {}
}
