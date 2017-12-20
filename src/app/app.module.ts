import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routing } from './app.routing';
import { MatDialogModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent, AccountDialog, SendDialog } from './profile/profile.component';
import { DataSettingsComponent, WhitelistDialog } from './data-settings/data-settings.component';
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
    AccountDialog,
    SendDialog,
    WhitelistDialog
  ],
  imports: [
    Routing,
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule
  ],
  entryComponents: [
    AccountDialog,
    SendDialog,
    WhitelistDialog
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
