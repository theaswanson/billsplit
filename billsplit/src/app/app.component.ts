import { Component, OnInit } from '@angular/core';
import { BillService } from './bill.service';
import { ItemizedBill, FlatBill } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'billsplit';
  itemizedBills: ItemizedBill[] = [];
  flatBills: FlatBill[] = [];

  constructor(private billService: BillService) {
  }

  ngOnInit() {
    this.itemizedBills = this.billService.getItemizedBills();
    this.flatBills = this.billService.getFlatBills();
  }

  addItemizedBill(): void {
    this.billService.addItemizedBill();
  }
  
  addFlatBill(): void {
    this.billService.addFlatBill();
  }

  addItem(bill: ItemizedBill): void {
    this.billService.addItem(bill);
  }

  deleteItemizedBill(bill: ItemizedBill): void {
    this.billService.deleteItemizedBill(bill);
  }

  deleteItem(bill: ItemizedBill, item: FlatBill): void {
    this.billService.deleteItem(bill, item);
  }

  deleteFlatBill(bill: FlatBill): void {
    this.billService.deleteFlatBill(bill);
  }

  getSumOfItemizedBill(bill: ItemizedBill): number {
    return this.billService.getSumOfBills(bill.items);
  }
  
  getSumOfItemizedBills(): number {
    let total = 0;
    for (let itemizedBill of this.itemizedBills) {
      total += this.getSumOfItemizedBill(itemizedBill);
    }
    return total;
  }
  
  getSumOfFlatBills(): number {
    return this.billService.getSumOfBills(this.flatBills);
  }

  getTotalSum(): number {
    let sumOfItemizedBills = this.getSumOfItemizedBills();
    let sumOfFlatBills = this.getSumOfFlatBills();
    return sumOfItemizedBills + sumOfFlatBills;
  }

  printItemizedBills(): void {
    let json = JSON.stringify(this.itemizedBills);
    console.log(json);
  }

  printFlatBills(): void {
    let json = JSON.stringify(this.flatBills);
    console.log(json);
  }
}
