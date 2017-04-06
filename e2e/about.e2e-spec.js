/**
 * Created by tim.cluff on 4/6/2017.
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var about_page_1 = require("./page-objects/about/about-page");
describe('Pages', function () {
    var page;
    beforeEach(function () {
        page = new about_page_1.AboutPage();
    });
    it('should display the about page', function () {
        page.navigateTo();
    });
});
//# sourceMappingURL=about.e2e-spec.js.map