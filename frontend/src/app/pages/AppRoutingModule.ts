import { RouterModule, Routes } from '@angular/router';
import {TopComponent} from './top/TopComponent';
import {StartComponent} from './start/StartComponent';

const routes: Routes = [
   { path : '', component : TopComponent }
  ,{ path : 'start', component : StartComponent }
];

export const AppRoutingModule = RouterModule.forRoot(routes);