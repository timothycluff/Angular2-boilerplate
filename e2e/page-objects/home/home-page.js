/**
 * Created by tim.cluff on 4/6/2017.
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var HomePage = (function () {
    function HomePage() {
    }
    HomePage.prototype.navigateTo = function () {
        protractor_1.browser.ignoreSynchronization = true;
        protractor_1.browser.driver.sleep(500);
        return protractor_1.browser.get('/home');
    };
    HomePage.prototype.getActiveNavbarText = function () {
        return protractor_1.element(protractor_1.by.css('h1')).getText();
    };
    return HomePage;
}());
exports.HomePage = HomePage;
//# sourceMappingURL=home-page.js.map