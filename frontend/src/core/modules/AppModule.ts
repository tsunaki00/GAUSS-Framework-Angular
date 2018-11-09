import {NgModule} from '@angular/core';

import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule } from "@angular/forms";
import {HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
 
import { NgxMdModule } from 'ngx-md';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgxPageScrollModule} from 'ngx-page-scroll';

import {JwtInterceptor} from '../interceptors/JwtInterceptor'
import {ErrorInterceptor} from '../interceptors/ErrorInterceptor'

/*-- routing import start --*/
import {TodoRoutingModule} from '../../app/pages/todo/TodoRoutingModule';
import {TutorialRoutingModule} from '../../app/pages/tutorial/TutorialRoutingModule';
/*-- routing import end --*/

import {AppRoutingModule} from '../../app/pages/AppRoutingModule';

/*-- declaration import start --*/
import {AppFooterComponent} from '../../app/directives/app-footer/AppFooterComponent';
import {AppHeaderComponent} from '../../app/directives/app-header/AppHeaderComponent';
import {AppLeftSideComponent} from '../../app/directives/app-left-side/AppLeftSideComponent';
import {StartComponent} from '../../app/pages/start/StartComponent';
import {ListComponent} from '../../app/pages/todo/list/ListComponent';
import {TopComponent} from '../../app/pages/top/TopComponent';
import {FrontendComponent} from '../../app/pages/tutorial/frontend/FrontendComponent';
import {AppComponent} from '../app/AppComponent';
/*-- declaration import end --*/
/*-- service import start --*/
import {AuthService} from '../../app/common/service/AuthService';
import {UserService} from '../../app/common/service/UserService';
import {ListService} from '../../app/pages/todo/list/ListService';
/*-- service import end --*/
import {AngularMaterialModule} from './AngularMaterialModule';
@NgModule({
  declarations: [
    /*-- declarations start --*/
    AppFooterComponent
    ,AppHeaderComponent
    ,AppLeftSideComponent
    ,StartComponent
    ,ListComponent
    ,TopComponent
    ,FrontendComponent
    ,AppComponent
    /*-- declarations end --*/
  ],
  imports: [
    BrowserModule
    ,FormsModule
    ,ReactiveFormsModule
    ,HttpClientModule
    ,NgbModule
    ,AppRoutingModule
    ,BrowserAnimationsModule
    ,NgxPageScrollModule
    ,NgxMdModule.forRoot()
    ,AngularMaterialModule,
    
    /*-- routing start --*/
    TodoRoutingModule
    ,TutorialRoutingModule
    /*-- routing end --*/
  ],
  
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    /*-- service start --*/
    AuthService
    ,UserService
    ,ListService
    /*-- service end --*/
  ],
  entryComponents: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }