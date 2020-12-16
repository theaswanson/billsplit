import { Component, OnInit } from '@angular/core';
import { BillService } from '../bill.service';
import { FlatBill } from '../models';

@Component({
  selector: 'app-flat-bills',
  templateUrl: './flat-bills.component.html',
  styleUrls: ['./flat-bills.component.scss']
})
export class FlatBillsComponent implements OnInit {

  flatBills: FlatBill[] = [];
  
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

}
