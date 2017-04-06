/**
 * Created by tim.cluff on 4/6/2017.
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var home_page_1 = require("./page-objects/home/home-page");
describe('Pages', function () {
    var page;
    beforeEach(function () {
        page = new home_page_1.HomePage();
    });
    it('should display the home page', function () {
        page.navigateTo();
    });
});
//# sourceMappingURL=home.e2e-spec.js.map