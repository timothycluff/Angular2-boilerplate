/**
 * Created by tim.cluff on 4/6/2017.
 */

import { Component, OnInit } from '@angular/core';
import { PageService } from './page.service';
import { ActivatedRoute } from '@angular/router';
import { IPage } from './index';

@Component({
    template: `
    <div class="container">
   
    </div>
  `
})
export class PageListComponent implements OnInit {
    events:IPage[];

    constructor(
        private pageService: PageService,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.events = this.route.snapshot.data['pages'];
    }
}