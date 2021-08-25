import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { BillService } from './bill.service';
import { CacheService } from './cache.service';
import { Person } from './models';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  people: Person[];
  
  constructor(
    cacheService: CacheService,
    private billService: BillService
  ) {
    this.people = cacheService.load().people;
  }

  getPeople(): Person[] {
    return this.people;
  }

  addPerson(): void {
    const person = { id: uuid(), name: 'New person' } as Person;
    this.people.push(person);
  }

  deletePerson(person: Person): void {
    this.billService.deletePerson(person);
    this.removePerson(person);
  }

  private removePerson(person: Person) {
    const index = this.people.findIndex(p => p.id === person.id);
    if (index >= 0) {
      this.people.splice(index, 1);
    }
  }
}
