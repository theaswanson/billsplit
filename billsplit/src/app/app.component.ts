import { Component, OnInit } from '@angular/core';
import { BillService } from './bill.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'billsplit';

  constructor(private billService: BillService) { }

  getTotalSum(): number {
    let sumOfItemizedBills = this.billService.getSumOfItemizedBills();
    let sumOfFlatBills = this.billService.getSumOfFlatBills();
    return sumOfItemizedBills + sumOfFlatBills;
  }

  getSumOfItemizedBills(): number {
    return this.billService.getSumOfItemizedBills();
  }

  getSumOfFlatBills(): number {
    return this.billService.getSumOfFlatBills();
  }
}
