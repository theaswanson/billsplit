import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ItemizedBillsComponent } from './itemized-bills/itemized-bills.component';
import { FlatBillsComponent } from './flat-bills/flat-bills.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BillsComponent } from './bills/bills.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemizedBillsComponent,
    FlatBillsComponent,
    BillsComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
