/**
 * Created by tim.cluff on 4/6/2017.
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var AboutPage = (function () {
    function AboutPage() {
    }
    AboutPage.prototype.navigateTo = function () {
        protractor_1.browser.ignoreSynchronization = true;
        protractor_1.browser.driver.sleep(500);
        return protractor_1.browser.get('/about');
    };
    AboutPage.prototype.getActiveNavbarText = function () {
        return protractor_1.element(protractor_1.by.css('h1')).getText();
    };
    return AboutPage;
}());
exports.AboutPage = AboutPage;
//# sourceMappingURL=about-page.js.map