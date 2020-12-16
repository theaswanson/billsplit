import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ItemizedBillsComponent } from './itemized-bills/itemized-bills.component';
import { FlatBillsComponent } from './flat-bills/flat-bills.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemizedBillsComponent,
    FlatBillsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
