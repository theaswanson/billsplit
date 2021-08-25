import { Component, Input, OnInit } from '@angular/core';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Person } from '../models';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  faPlus = faPlus;
  faMinus = faMinus;

  @Input() people: Person[];

  constructor(private peopleService: PeopleService) { }

  ngOnInit(): void {
  }

  addPerson(): void {
    this.peopleService.addPerson();
  }

  removePerson(person: Person): void {
    this.peopleService.deletePerson(person);
  }

}
