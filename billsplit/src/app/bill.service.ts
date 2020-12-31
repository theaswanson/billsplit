import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { ItemizedBill, FlatBill, Person } from './models';

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
      items: [this.newFlatBill('New item')]
    } as ItemizedBill;
    this.itemizedBills.push(bill);
  }

  private newFlatBill(name: string = 'New bill'): FlatBill {
    return {
      id: uuid(),
      name: name,
      cost: Number(0),
      people: []
    } as FlatBill;
  }

  addFlatBill(): void {
    this.flatBills.push(this.newFlatBill());
  }

  addItem(bill: ItemizedBill): void {
    bill.items.push(this.newFlatBill('New item'));
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
    for (let itemizedBill of this.itemizedBills) {
      total += this.getSumOfBills(itemizedBill.items, person);
    }
    total += this.getSumOfBills(this.flatBills, person)
    return total;
  }

  getSumOfItemizedBill(bill: ItemizedBill): number {
    return this.getSumOfBills(bill.items);
  }

  getSumOfItemizedBills(): number {
    let total = 0;
    for (let itemizedBill of this.itemizedBills) {
      total += this.getSumOfItemizedBill(itemizedBill);
    }
    return total;
  }

  getSumOfFlatBills(): number {
    return this.getSumOfBills(this.flatBills);
  }

  getSumOfBills(bills: FlatBill[], person?: Person): number {
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
}
