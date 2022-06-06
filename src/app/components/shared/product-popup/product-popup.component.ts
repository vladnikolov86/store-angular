import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import ProductEntity from 'src/app/entities/Product.entity';

@Component({
  selector: 'app-product-popup',
  templateUrl: './product-popup.component.html',
  styleUrls: ['./product-popup.component.css'],
})
export class ProductPopupComponent implements OnInit {
  modelLabel = 'Model: ';
  manufacturerLabel = 'Manufacturer: ';
  originLabel= "Produced in: "
  product: ProductEntity = {
    id: 0,
    manufacturer: '',
    name: '',
    price: 0,
    rating: 0,
    image: '',
    description: '',
    countryOfOrigin: '',
  };
  constructor(
    public dialogRef: MatDialogRef<ProductPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ProductEntity
  ) {
    this.product = data;
    console.log(this.product)
  }

  ngOnInit(): void {}
}
