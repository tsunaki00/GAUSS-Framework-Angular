import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { MainLayoutComponent } from '../../core/layouts/main/MainLayoutComponent';

import {TopComponent} from './top/TopComponent';
import {StartComponent} from './start/StartComponent';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path : '', component : TopComponent }
      ,{ path : 'start', component : StartComponent }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule],
})
export class AppRoutingModule { }