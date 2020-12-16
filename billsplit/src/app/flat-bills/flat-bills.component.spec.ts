import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlatBillsComponent } from './flat-bills.component';

describe('FlatBillsComponent', () => {
  let component: FlatBillsComponent;
  let fixture: ComponentFixture<FlatBillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlatBillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlatBillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
