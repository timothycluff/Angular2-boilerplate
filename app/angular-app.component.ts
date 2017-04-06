import  { Component } from '@angular/core';

@Component({
    selector: 'angular-app',
    template: `
        <nav-bar></nav-bar>
        <router-outlet></router-outlet>
    `
})
export class AppComponent { }