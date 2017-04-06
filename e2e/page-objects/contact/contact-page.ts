/**
 * Created by tim.cluff on 4/6/2017.
 */

import { browser, element, by } from 'protractor';

export class ContactPage {
    navigateTo() {
        browser.ignoreSynchronization = true;
        browser.driver.sleep(500);
        return browser.get('/contact');
    }

    getActiveNavbarText() {
        return element(by.css('h1')).getText();
    }
}