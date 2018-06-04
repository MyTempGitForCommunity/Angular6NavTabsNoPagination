import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MatTabsModule} from '@angular/material';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import { TabAComponent } from './tabs/tab-a/tab-a.component';
import { TabBComponent } from './tabs/tab-b/tab-b.component';
import { TabCComponent } from './tabs/tab-c/tab-c.component';
import { TabDComponent } from './tabs/tab-d/tab-d.component';
import { TabEComponent } from './tabs/tab-e/tab-e.component';
import { TabFComponent } from './tabs/tab-f/tab-f.component';
import { TabGComponent } from './tabs/tab-g/tab-g.component';
import { TabHComponent } from './tabs/tab-h/tab-h.component';
import { TabIComponent } from './tabs/tab-i/tab-i.component';
import { TabJComponent } from './tabs/tab-j/tab-j.component';

@NgModule({
  declarations: [
    AppComponent,
    TabAComponent,
    TabBComponent,
    TabCComponent,
    TabDComponent,
    TabEComponent,
    TabFComponent,
    TabGComponent,
    TabHComponent,
    TabIComponent,
    TabJComponent,
  ],
  imports: [
    BrowserModule,
    MatTabsModule,
    RouterModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
