import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { ItemizedBill, FlatBill, Person } from './models';

@Injectable({
  providedIn: 'root'
})
export class BillService {

  bills: ItemizedBill[] = [];

  constructor() { }

  getBills(): ItemizedBill[] {
    return this.bills;
  }

  addBill(): void {
    const bill = {
      id: uuid(),
      name: 'New bill',
      items: [this.newFlatBill('New item')]
    } as ItemizedBill;
    this.bills.push(bill);
  }

  addItem(bill: ItemizedBill): void {
    let newItem = this.newFlatBill('New item');
    bill.items.push(newItem);
  }

  deleteBill(bill: ItemizedBill): void {
    const index = this.bills.findIndex(x => x.id === bill.id);
    if (index >= 0) {
      this.bills.splice(index, 1);
    }
  }

  deleteItem(bill: ItemizedBill, item: FlatBill): void {
    const index = bill.items.findIndex(x => x.id === item.id);
    if (index >= 0) {
      bill.items.splice(index, 1);
    }
  }

  togglePerson(bill: FlatBill, person: Person): void {
    const index = bill.people.findIndex(x => x.id === person.id);
    if (index >= 0) {
      bill.people.splice(index, 1);
    } else {
      bill.people.push(person);
    }
  }

  getPersonTotal(person: Person) {
    let total = 0;
    for (let itemizedBill of this.bills) {
      total += this.getSumOfFlatBills(itemizedBill.items, person);
    }
    return total;
  }

  getSumOfBill(bill: ItemizedBill): number {
    return this.getSumOfFlatBills(bill.items);
  }

  getSumOfBills(): number {
    let total = 0;
    for (let itemizedBill of this.bills) {
      total += this.getSumOfBill(itemizedBill);
    }
    return total;
  }

  getSumOfFlatBills(bills: FlatBill[], person?: Person): number {
    let filterByPerson = person !== undefined;
    let filteredBills = filterByPerson
      ? bills.filter(x => x.people.findIndex(p => p.id === person.id) >= 0)
      : bills;

    let total = 0;
    for (let bill of filteredBills) {
      total += filterByPerson
        ? bill.cost / bill.people.length
        : bill.cost;
    }
    return total;
  }

  private newFlatBill(name: string = 'New bill'): FlatBill {
    return {
      id: uuid(),
      name: name,
      cost: Number(0),
      people: []
    } as FlatBill;
  }
}
