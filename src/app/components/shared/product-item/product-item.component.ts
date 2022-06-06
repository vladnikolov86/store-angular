import { Component, Input, OnInit } from '@angular/core';
import ProductEntity from 'src/app/entities/Product.entity';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { ProductPopupComponent } from '../product-popup/product-popup.component';
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
  constructor(private dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(ProductPopupComponent, {
      width: '500px',
      data: this.product,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit(): void {}
}
