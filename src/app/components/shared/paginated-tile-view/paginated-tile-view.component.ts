import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatTabChangeEvent } from '@angular/material/tabs';
import ProductEntity from 'src/app/entities/Product.entity';
import { FetchProductsService } from 'src/app/services/fetch-products.service';

@Component({
  selector: 'app-paginated-tile-view',
  templateUrl: './paginated-tile-view.component.html',
  styleUrls: ['./paginated-tile-view.component.css'],
})
export class PaginatedTileViewComponent implements OnInit {
  currentPage = 0;
  pageSize = 10;
  numberOfItems = 0;
  productEntities: ProductEntity[] = [];
  allItems: ProductEntity[] = [];
  constructor(private fetchProducts: FetchProductsService) {}

  ngOnInit(): void {
    console.log('init')
    this.getData();
  }

  public handlePage(e: PageEvent) {
    this.currentPage = e.pageIndex;
    this.productEntities = this.allItems
      .slice(
        this.currentPage * this.pageSize,
        (this.currentPage + 1) * this.pageSize
      )
      .map((item) => new ProductEntity(item));
  }
  getData = (): void => {
    this.currentPage = 0;
    this.fetchProducts.getProducts().subscribe((data: ProductEntity[]) => {
      this.numberOfItems = data.length;
      this.allItems = data;
      return (this.productEntities = data.slice(
        this.currentPage,
        (this.currentPage + 1) * this.pageSize
      )).map((item) => new ProductEntity(item));
    });
  };
}
