import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ItemizedBillsComponent } from './itemized-bills/itemized-bills.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BillsComponent } from './bills/bills.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CacheControlsComponent } from './cache-controls/cache-controls.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClearCacheDialogComponent } from './clear-cache-dialog/clear-cache-dialog.component';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { PeopleComponent } from './people/people.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemizedBillsComponent,
    BillsComponent,
    NavigationComponent,
    CacheControlsComponent,
    ClearCacheDialogComponent,
    PeopleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
