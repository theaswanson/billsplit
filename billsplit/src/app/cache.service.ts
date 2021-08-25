import { Injectable } from '@angular/core';
import { ItemizedBill, Person } from './models';

export class Cache {
  bills: ItemizedBill[];
  people: Person[];

  constructor() {
    this.bills = [];
    this.people = [];
  }
}

@Injectable({
  providedIn: 'root'
})
export class CacheService {

  cacheName: string;

  constructor() {
    this.cacheName = 'billsplit-cache';
  }

  save(cache: Cache): void {
    localStorage.setItem(this.cacheName, JSON.stringify(cache));
  }

  load(): Cache {
    const cache = localStorage.getItem(this.cacheName);
    return cache ? JSON.parse(cache) : new Cache();
  }

  clear(): void {
    localStorage.clear();
  }

  download(): void {
    const cache = this.load();
    const cacheJson = JSON.stringify(cache);
    let blob = new Blob([cacheJson], { type: 'text/json' });
    this.downloadBlob(blob, 'Billsplit.json');
  }

  private downloadBlob(blob: Blob, fileName: string): void {
    const a = document.createElement('a');
    a.setAttribute('style', 'display:none;');
    document.body.appendChild(a);
    a.download = fileName;
    a.href = URL.createObjectURL(blob);
    a.target = '_blank';
    a.click();
    document.body.removeChild(a);
  }
}
