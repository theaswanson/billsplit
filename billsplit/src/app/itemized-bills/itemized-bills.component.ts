import { Component, OnInit } from '@angular/core';
import { BillService } from '../bill.service';
import { FlatBill, ItemizedBill } from '../models';

@Component({
  selector: 'app-itemized-bills',
  templateUrl: './itemized-bills.component.html',
  styleUrls: ['./itemized-bills.component.scss']
})
export class ItemizedBillsComponent implements OnInit {
  
  itemizedBills: ItemizedBill[] = [];

  constructor(private billService: BillService) { }

  ngOnInit(): void {
    this.itemizedBills = this.billService.getItemizedBills();
  }

  addItemizedBill(): void {
    this.billService.addItemizedBill();
  }

  deleteItemizedBill(bill: ItemizedBill): void {
    this.billService.deleteItemizedBill(bill);
  }

  addItem(bill: ItemizedBill): void {
    this.billService.addItem(bill);
  }

  deleteItem(bill: ItemizedBill, item: FlatBill): void {
    this.billService.deleteItem(bill, item);
  }

  getSumOfItemizedBill(bill: ItemizedBill): number {
    return this.billService.getSumOfItemizedBill(bill);
  }

  printItemizedBills(): void {
    let json = JSON.stringify(this.itemizedBills);
    console.log(json);
  }

}
