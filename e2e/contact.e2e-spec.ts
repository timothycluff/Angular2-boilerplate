/**
 * Created by tim.cluff on 4/6/2017.
 */

import {browser, element, by} from 'protractor';
import {ContactPage} from './page-objects/contact/contact-page';

describe('Pages', () => {
    let page: ContactPage;

    beforeEach(() => {
        page = new ContactPage();
    });

    it('should display the contact page', () => {
        page.navigateTo();
    })
})