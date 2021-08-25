import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CacheControlsComponent } from './cache-controls.component';

describe('CacheControlsComponent', () => {
  let component: CacheControlsComponent;
  let fixture: ComponentFixture<CacheControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CacheControlsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CacheControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
