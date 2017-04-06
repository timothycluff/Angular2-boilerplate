/**
 * Created by tim.cluff on 4/6/2017.
 */

import {browser, element, by} from 'protractor';
import {AboutPage} from './page-objects/about/about-page';

describe('Pages', () => {
    let page: AboutPage;

    beforeEach(() => {
        page = new AboutPage();
    });

    it('should display the about page', () => {
        page.navigateTo();
    })
})