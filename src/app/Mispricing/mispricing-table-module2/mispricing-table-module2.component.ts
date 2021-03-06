import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mispricing-table-module2',
  templateUrl: './mispricing-table-module2.component.html',
  styleUrls: ['./mispricing-table-module2.component.scss']
})
export class MispricingTableModule2Component implements OnInit {

  @Input() data: any[];

  constructor() { }

  ngOnInit() {
    this.data = [
      [2345222, 2150000, 2150000, 1950000, -200000, -200000, -9, -9],
      [3523555, 250000, 200000, 179000, -21000, -71000, -9, -9],
      [1289244, 89000, 75000, 75000, 0, -14000, -9, -9],
      [2345323, 350000, 325000, 430000, 105000, 80000, 32, 23],
      [3333333, 265000, 240000, 1850000, -55000, -80000, -23, -30],
      [2342343, 146000, 98000, 950000, -3000, -51000, -3, -35],
      [2343322, 750000, 500000, 439000, -61000, -311000, -12, -41],
      [9876236, 453430, 259000, 246000, -13000, -207430, -5, -46],
      [23423522, 479000, 425000, 375000, -50000, -104000, -12, -22],
      [65292002, 680000, 625000, 620000, -5000, -60000, -1, -9]
    ]
  }

  formatPrice(price) {
    let prefix = '$';
    if (price < 0) {
      prefix = '-$';
      price = -price;
    }
    return prefix + Number(price).toLocaleString('en-GB');
  }

  formatPercent(percent) {
    return Number(percent).toLocaleString('en-GB') + '%';
  }

}
