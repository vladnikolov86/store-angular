import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  tabSeller = 'Top 10 Sellers';
  tabBuyers = 'Top 10 Buyers';
  tabItems = 'Top 10 Items sold today';
  constructor() {}

  ngOnInit(): void {}
}
