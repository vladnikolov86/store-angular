import { Component, AfterViewInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs/tab-group';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements AfterViewInit {
  tabSeller = 'Top 10 Sellers';
  tabBuyers = 'Top 10 Buyers';
  tabItems = 'Top 10 Items sold today';
  tabCurrentIndex = -1;
  sellerConfig = {
    id: 'sellersChart',
    prefix: 'Team',
    isPercentage: true,
    labels: ['Burgas', 'Sofia', 'Plovdiv', 'Ruse'],
    values: [22.4, 27.6, 30, 20],
  };
  bueyrsConfig = {
    id: 'buyersChart',
    isPercentage: false,
    labels: ['Microsoft', 'Google', 'Apple', 'Amazon'],
    values: [44332, 22334, 4442, 221],
    suffix: '$'
  };
  document = window.document;
  constructor() {}

  tabChanged = (tabChangeEvent: MatTabChangeEvent): void => {
    this.tabCurrentIndex = tabChangeEvent.index;
  };

  ngAfterViewInit(): void {
    this.tabCurrentIndex = 0;
  }
}
