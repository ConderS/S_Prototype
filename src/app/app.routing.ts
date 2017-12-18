import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PopupComponent } from './popup/popup.component';
import { ProfileComponent } from './profile/profile.component';
import { QaComponent } from './qa/qa.component';
import { DataSettingsComponent } from './data-settings/data-settings.component';

const appRoutes: Routes = [
    { path: 'popup', component: PopupComponent },
    { path: 'home', component: HomeComponent, 
        children: [
            { path: 'profile', component: ProfileComponent },
            { path: 'qa', component: QaComponent },
            { path: 'data', component: DataSettingsComponent },
            { path: '', redirectTo: 'profile', pathMatch: 'full' }
        ]
    },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });