import { Component, Input, OnInit } from '@angular/core';
import { faMinus, faPlus, faTerminal } from '@fortawesome/free-solid-svg-icons';
import { BillService } from '../bill.service';
import { FlatBill, ItemizedBill, Person } from '../models';

@Component({
  selector: 'app-itemized-bills',
  templateUrl: './itemized-bills.component.html',
  styleUrls: ['./itemized-bills.component.scss']
})
export class ItemizedBillsComponent implements OnInit {
  
  faPlus = faPlus;
  faMinus = faMinus;
  faTerminal = faTerminal;
  
  bills: ItemizedBill[] = [];
  @Input()
  people: Person[];

  constructor(private billService: BillService) { }

  ngOnInit(): void {
    this.bills = this.billService.getBills();
  }

  addBill(): void {
    this.billService.addBill();
  }

  deleteBill(bill: ItemizedBill): void {
    this.billService.deleteBill(bill);
  }

  addItem(bill: ItemizedBill): void {
    this.billService.addItem(bill);
  }

  deleteItem(bill: ItemizedBill, item: FlatBill): void {
    this.billService.deleteItem(bill, item);
  }

  getSumOfBill(bill: ItemizedBill): number {
    return this.billService.getSumOfBill(bill);
  }

  togglePerson(bill: FlatBill, person: Person): void {
    this.billService.togglePerson(bill, person);
  }

  printBills(): void {
    let json = JSON.stringify(this.bills);
    console.log(json);
  }

  getPersonButtonClass(item: FlatBill, person: Person): any {
    return {
      'person': true,
      'success': item.people.findIndex(x => x.id === person.id) >= 0
    };
  }

}
