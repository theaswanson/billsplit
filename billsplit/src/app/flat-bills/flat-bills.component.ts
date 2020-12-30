import { Component, Input, OnInit } from '@angular/core';
import { faMinus, faPlus, faTerminal } from '@fortawesome/free-solid-svg-icons';
import { BillService } from '../bill.service';
import { FlatBill, Person } from '../models';

@Component({
  selector: 'app-flat-bills',
  templateUrl: './flat-bills.component.html',
  styleUrls: ['./flat-bills.component.scss']
})
export class FlatBillsComponent implements OnInit {

  faPlus = faPlus;
  faMinus = faMinus;
  faTerminal = faTerminal;
  
  flatBills: FlatBill[] = [];
  @Input()
  people: Person[];
  
  constructor(private billService: BillService) { }

  ngOnInit(): void {
    this.flatBills = this.billService.getFlatBills();
  }

  addFlatBill(): void {
    this.billService.addFlatBill();
  }

  deleteFlatBill(bill: FlatBill): void {
    this.billService.deleteFlatBill(bill);
  }

  printFlatBills(): void {
    let json = JSON.stringify(this.flatBills);
    console.log(json);
  }

  togglePerson(bill: FlatBill, person: Person): void {
    this.billService.togglePerson(bill, person);
  }

  getPersonButtonClass(item: FlatBill, person: Person): any {
    return {
      'person': true,
      'success': item.people.findIndex(x => x.id === person.id) >= 0
    };
  }

}
