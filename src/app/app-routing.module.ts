import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {NgModule} from '@angular/core';
import {TabAComponent} from './tabs/tab-a/tab-a.component';
import {TabBComponent} from './tabs/tab-b/tab-b.component';
import {TabDComponent} from './tabs/tab-d/tab-d.component';
import {TabEComponent} from './tabs/tab-e/tab-e.component';
import {TabFComponent} from './tabs/tab-f/tab-f.component';
import {TabGComponent} from './tabs/tab-g/tab-g.component';
import {TabHComponent} from './tabs/tab-h/tab-h.component';
import {TabIComponent} from './tabs/tab-i/tab-i.component';
import {TabJComponent} from './tabs/tab-j/tab-j.component';
import {TabCComponent} from './tabs/tab-c/tab-c.component';

const appRoutes: Routes = [
  {path: 'tab-a', component: TabAComponent},
  {path: 'tab-b', component: TabBComponent},
  {path: 'tab-c', component: TabCComponent},
  {path: 'tab-d', component: TabDComponent},
  {path: 'tab-e', component: TabEComponent},
  {path: 'tab-f', component: TabFComponent},
  {path: 'tab-g', component: TabGComponent},
  {path: 'tab-h', component: TabHComponent},
  {path: 'tab-i', component: TabIComponent},
  {path: 'tab-j', component: TabJComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
