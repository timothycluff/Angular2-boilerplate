/**
 * Created by tim.cluff on 4/6/2017.
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var ContactPage = (function () {
    function ContactPage() {
    }
    ContactPage.prototype.navigateTo = function () {
        protractor_1.browser.ignoreSynchronization = true;
        protractor_1.browser.driver.sleep(500);
        return protractor_1.browser.get('/contact');
    };
    ContactPage.prototype.getActiveNavbarText = function () {
        return protractor_1.element(protractor_1.by.css('h1')).getText();
    };
    return ContactPage;
}());
exports.ContactPage = ContactPage;
//# sourceMappingURL=contact-page.js.map