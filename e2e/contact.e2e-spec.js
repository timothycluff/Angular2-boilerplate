/**
 * Created by tim.cluff on 4/6/2017.
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var contact_page_1 = require("./page-objects/contact/contact-page");
describe('Pages', function () {
    var page;
    beforeEach(function () {
        page = new contact_page_1.ContactPage();
    });
    it('should display the contact page', function () {
        page.navigateTo();
    });
});
//# sourceMappingURL=contact.e2e-spec.js.map