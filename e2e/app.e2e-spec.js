"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by tim.cluff on 4/6/2017.
 */
var protractor_1 = require("protractor");
var home_page_1 = require("./page-objects/home/home-page");
describe('Pages', function () {
    var page;
    beforeEach(function () {
        page = new home_page_1.HomePage();
    });
    it('Should Display Home Page', function () {
        page.navigateTo();
        protractor_1.browser.driver.sleep(500);
        protractor_1.browser.getCurrentUrl().then(function (url) {
            expect(url).toEqual('http://localhost:8808/home');
        });
    });
});
//# sourceMappingURL=app.e2e-spec.js.map