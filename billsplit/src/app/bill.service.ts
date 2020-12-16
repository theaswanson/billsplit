import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { ItemizedBill, FlatBill } from './models';

@Injectable({
  providedIn: 'root'
})
export class BillService {

  itemizedBills: ItemizedBill[] = [];
  flatBills: FlatBill[] = [];

  constructor() { }

  getItemizedBills(): ItemizedBill[] {
    return this.itemizedBills;
  }

  getFlatBills(): FlatBill[] {
    return this.flatBills;
  }

  addItemizedBill(): void {
    const bill = {
      id: uuid(),
      name: 'New bill',
      items: [{
        id: uuid(),
        name: 'New item',
        cost: 0
      } as FlatBill]
    } as ItemizedBill;
    this.itemizedBills.push(bill);
  }

  addFlatBill(): void {
    const bill = {
      id: uuid(),
      name: 'New bill',
      cost: Number(0)
    } as FlatBill;
    this.flatBills.push(bill);
  }

  addItem(bill: ItemizedBill): void {
    bill.items.push({
      id: uuid(),
      name: 'New item',
      cost: Number(0)
    } as FlatBill);
  }

  deleteItemizedBill(bill: ItemizedBill): void {
    const index = this.itemizedBills.findIndex(x => x.id === bill.id);
    if (index >= 0) {
      this.itemizedBills.splice(index, 1);
    }
  }

  deleteItem(bill: ItemizedBill, item: FlatBill): void {
    const index = bill.items.findIndex(x => x.id === item.id);
    if (index >= 0) {
      bill.items.splice(index, 1);
    }
  }

  deleteFlatBill(bill: FlatBill): void {
    const index = this.flatBills.findIndex(x => x.id === bill.id);
    if (index >= 0) {
      this.flatBills.splice(index, 1);
    }
  }

  getSumOfBills(bills: FlatBill[]): number {
    let total = 0;
    for (let bill of bills) {
      total += bill.cost;
    }
    return total;
  }
}
