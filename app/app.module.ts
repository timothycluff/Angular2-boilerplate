/**
 * Created by tim.cluff on 4/5/2017.
 */

import './rxjs-extensions';
import { NgModule }                         from '@angular/core';
import { BrowserModule }                    from '@angular/platform-browser';
import { RouterModule }                     from '@angular/router';
import { HttpModule }                       from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
    HomeComponent,
    AboutComponent,
    ContactComponent,
    PageListComponent,
    PageService } from './pages/index'
import { JQ_TOKEN,
    TOASTR_TOKEN,
    Toastr,
    CollapsibleWellComponent,
    SimpleModalComponent,
    } from './common/index'
import { NavBarComponent } from './nav/navbar.component';
import { Error404Component } from './errors/404.component';
import { appRoutes } from './routes';

declare let toastr: Toastr;
declare let jQuery: Object;

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ReactiveFormsModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        HomeComponent,
        AboutComponent,
        ContactComponent,
        PageService,
        NavBarComponent,
        Error404Component,
        CollapsibleWellComponent,
        SimpleModalComponent,
    ],
    providers: [,
        { provide: TOASTR_TOKEN, useValue: toastr },
        { provide: JQ_TOKEN, useValue: jQuery },
    ],
    bootstrap: [ PageListComponent ]
})
export class AppModule { }

