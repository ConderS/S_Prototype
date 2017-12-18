import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routing } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
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
    NavComponent
  ],
  imports: [
    Routing,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
