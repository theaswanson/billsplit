import { Component, OnInit } from '@angular/core';
import { BillService } from './bill.service';
import { Person } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'billsplit';
  people: Person[] = [
    { id: '1', name: 'Adam' } as Person,
    { id: '2', name: 'Jacob' } as Person,
    { id: '3', name: 'Shelby' } as Person,
    { id: '4', name: 'Bill' } as Person,
  ];

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

  getPersonTotal(person: Person): number {
    return this.billService.getPersonTotal(person);
  }
}
