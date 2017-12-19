import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routing } from './app.routing';
import { MatDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent, AccountDialog } from './profile/profile.component';
import { DataSettingsComponent } from './data-settings/data-settings.component';
import { QaComponent } from './qa/qa.component';
import { PopupComponent } from './popup/popup.component';
import { NavComponent } from './home/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    DataSettingsComponent,
    QaComponent,
    PopupComponent,
    NavComponent,
    AccountDialog
  ],
  imports: [
    Routing,
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  entryComponents: [
    AccountDialog
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
