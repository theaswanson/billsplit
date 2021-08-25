import { Component, OnInit } from '@angular/core';
import { BillService } from '../bill.service';
import { ItemizedBill, Person } from '../models';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.scss']
})
export class BillsComponent implements OnInit {

  bills: ItemizedBill[];
  people: Person[];

  constructor(
    private billService: BillService,
    private peopleService: PeopleService
  ) { }

  ngOnInit(): void {
    this.bills = this.billService.getBills();
    this.people = this.peopleService.getPeople();
  }

  getSumOfBills(): number {
    return this.billService.getSumOfBills();
  }

  getPersonTotal(person: Person): number {
    return this.billService.getPersonTotal(person);
  }

}
