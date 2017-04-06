/**
 * Created by tim.cluff on 4/6/2017.
 */

import {browser, element, by} from 'protractor';
import {HomePage} from './page-objects/home/home-page';

describe('Pages', () => {
    let page: HomePage;

    beforeEach(() => {
        page = new HomePage();
    });

    it('should display the home page', () => {
        page.navigateTo();
    })
})