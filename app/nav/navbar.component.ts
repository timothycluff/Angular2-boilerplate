/**
 * Created by tim.cluff on 4/6/2017.
 */

import { Component } from '@angular/core';
import { PageService } from '../pages/index';

@Component({
    selector: 'nav-bar',
    templateUrl: 'app/nav/navbar.component.html',
    styles: [`
        
    `],
})
export class NavBarComponent {
    constructor(private pageService: PageService) { }
}