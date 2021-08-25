import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Cache, CacheService } from '../cache.service';
import { NotificationService } from '../notification.service';
import { MatDialog } from '@angular/material/dialog';
import { PeopleService } from '../people.service';
import { BillService } from '../bill.service';
import { ClearCacheDialogComponent } from '../clear-cache-dialog/clear-cache-dialog.component';

@Component({
  selector: 'app-cache-controls',
  templateUrl: './cache-controls.component.html',
  styleUrls: ['./cache-controls.component.scss']
})
export class CacheControlsComponent implements OnInit {

  @Output() cacheChange: EventEmitter<Cache>;

  constructor(
    private peopleService: PeopleService,
    private billService: BillService,
    private cacheService: CacheService,
    private notificationService: NotificationService,
    private dialog: MatDialog
  ) {
    this.cacheChange = new EventEmitter<Cache>();
  }

  ngOnInit(): void { }

  save(): void {
    let cache = this.buildCache();
    this.cacheService.save(cache);
    this.notificationService.open('Saved.');
  }

  load(): void {
    let cache = this.cacheService.load();
    this.cacheChange.emit(cache);
    this.notificationService.open('Loaded.');
  }

  clear(): void {
    const confirmationDialog = this.dialog.open(ClearCacheDialogComponent);
    confirmationDialog.afterClosed().subscribe(result => {
      if (result === true) {
        this.clearSaveData();
      }
    });
  }

  download(): void {
    this.cacheService.download();
  }

  private buildCache() {
    let people = this.peopleService.getPeople();
    let bills = this.billService.getBills();
    let cache = {
      people: people,
      bills: bills
    } as Cache;
    return cache;
  }

  private clearSaveData() {
    this.cacheService.clear();
    this.notificationService.open('Cleared save data.');
  }

}
