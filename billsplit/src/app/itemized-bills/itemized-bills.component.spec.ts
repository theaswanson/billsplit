import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemizedBillsComponent } from './itemized-bills.component';

describe('ItemizedBillsComponent', () => {
  let component: ItemizedBillsComponent;
  let fixture: ComponentFixture<ItemizedBillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemizedBillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemizedBillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
