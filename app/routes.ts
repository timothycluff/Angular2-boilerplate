/**
 * Created by tim.cluff on 4/6/2017.
 */

import { Routes } from '@angular/router'

import {HomeComponent} from './pages/home/Home.component';
import {AboutComponent} from './pages/about/About.component'
import {ContactComponent} from './pages/contact/Contact.component';

import { Error404Component } from './errors/404.component';

export const appRoutes: Routes = [
    { path: '/home', component: HomeComponent },
    { path: '/', redirectTo: '/home' },
    { path: '/about', component: AboutComponent },
    { path: '/contact', component: ContactComponent },
    { path: '404', component: Error404Component },
    { path: '', redirectTo: '/home', pathMatch: 'full'}
];
