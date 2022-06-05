import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatTabChangeEvent } from '@angular/material/tabs';
import ProductEntity from 'src/app/entities/Product.entity';
import { FetchProductsService } from 'src/app/services/fetch-products.service';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css'],
})
export class SellerComponent implements OnInit {
  currentPage = 0;
  pageSize = 10;
  numberOfItems = 0;
  tabTop = 'Top 10 items sold';
  tabAllProducts = 'All my products';
  tabCurrentIndex = 0;
  topItemsSoldConfig = {
    id: 'sellersChart',
    prefix: '',
    isPercentage: false,
    labels: [
      'SamsungS4',
      'SamsungS5',
      'SamsungS7',
      'IPhone10',
      'IPhone11',
      'IPhone12',
      'BlackBerry',
      'OnePlus5t',
      'OnePlus7t',
      'RedmiNote',
      'Nokia3310',
    ],
    values: [100, 150, 30, 300, 200, 31, 22, 36, 122, 189],
    suffix: 'items sold',
  };
  productEntities: ProductEntity[] = [];
  allItems: ProductEntity[] = [];
  constructor(private fetchProducts: FetchProductsService) {}

  ngOnInit(): void {}

  public handlePage(e: PageEvent) {
    this.currentPage = e.pageIndex;
    this.productEntities = this.allItems
      .slice(
        this.currentPage * this.pageSize,
        (this.currentPage + 1) * this.pageSize
      )
      .map((item) => new ProductEntity(item));

    console.log(e.pageIndex);
  }
  tabChanged = (tabChangeEvent: MatTabChangeEvent): void => {
    this.tabCurrentIndex = tabChangeEvent.index;
    if (this.tabCurrentIndex == 1) {
      this.currentPage = 0;
      this.fetchProducts.getProducts().subscribe((data: ProductEntity[]) => {
        this.numberOfItems = data.length;
        this.allItems = data;
        return (this.productEntities = data.slice(
          this.currentPage,
          (this.currentPage + 1) * this.pageSize
        )).map((item) => new ProductEntity(item));
      });
    }
  };
}
