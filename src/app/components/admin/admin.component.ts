import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatTabChangeEvent } from '@angular/material/tabs/tab-group';
import ProductEntity from 'src/app/entities/Product.entity';
const PRODUCT_TABLE_DATA: ProductEntity[] = [
  new ProductEntity({
    id: 1,
    name: 'GalaxyS4',
    price: 200,
    rating: 3.5,
    manufacturer: 'Samsung',
  }),
  new ProductEntity({
    id: 2,
    name: 'Iphone13',
    price: 200,
    rating: 3.5,
    manufacturer: 'Apple',
  }),
  new ProductEntity({
    id: 3,
    name: 'Iphone12',
    price: 120,
    rating: 4.4,
    manufacturer: 'Apple',
  }),
  new ProductEntity({
    id: 4,
    name: '5t',
    price: 300,
    rating: 5,
    manufacturer: 'OnePlus',
  }),
  new ProductEntity({
    id: 5,
    name: '6t',
    price: 400,
    rating: 4.2,
    manufacturer: 'OnePlus',
  }),
  new ProductEntity({
    id: 6,
    name: '7t',
    price: 900,
    rating: 2,
    manufacturer: 'OnePlus',
  }),
  new ProductEntity({
    id: 7,
    name: 'S8',
    price: 1000,
    rating: 4.9,
    manufacturer: 'Samsung',
  }),
  new ProductEntity({
    id: 8,
    name: 'S9',
    price: 999,
    rating: 4.2,
    manufacturer: 'Samsung',
  }),
  new ProductEntity({
    id: 9,
    name: 'S10',
    price: 1200,
    rating: 4.3,
    manufacturer: 'Samsung',
  }),
  new ProductEntity({
    id: 10,
    name: 'IPadMax',
    price: 1999,
    rating: 4.9,
    manufacturer: 'Apple',
  }),
];
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements AfterViewInit {
  tabSeller = 'Top 10 Sellers';
  tabBuyers = 'Top 10 Buyers';
  tabItems = 'Top 10 Items sold today';
  tabCurrentIndex = 0;
  chartViewLoaded = false;
  sellerConfig = {
    id: 'sellersChart',
    index: 0,
    prefix: 'Team',
    isPercentage: true,
    labels: ['Burgas', 'Sofia', 'Plovdiv', 'Ruse'],
    values: [22.4, 27.6, 30, 20],
    suffix: '',
  };
  bueyrsConfig = {
    index: 1,
    id: 'buyersChart',
    isPercentage: false,
    labels: ['Microsoft', 'Google', 'Apple', 'Amazon'],
    values: [44332, 22334, 4442, 221],
    suffix: '$',
    prefix: '',
  };
  displayedColumns: string[] = [
    'id',
    'price',
    'name',
    'manufacturer',
    'rating',
  ];
  @ViewChild(MatSort) sort = new MatSort();
  dataSource = new MatTableDataSource(PRODUCT_TABLE_DATA);
  constructor() {

  }


  tabChanged = (tabChangeEvent: MatTabChangeEvent): void => {
    this.tabCurrentIndex = tabChangeEvent.index;
    this.chartViewLoaded = false;
  };

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  changeTabIndex() {
    this.chartViewLoaded = true;
  }
}
