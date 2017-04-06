/**
 * Created by tim.cluff on 4/6/2017.
 */
import { browser, element, by } from 'protractor';
import { HomePage } from './page-objects/home/home-page'

describe('Pages', function () {
    let page: HomePage;
    beforeEach(() => {
        page = new HomePage();
    });
    it('Should Display Home Page', () => {
        page.navigateTo();

        browser.driver.sleep(500);
        browser.getCurrentUrl().then(url => {
            expect(url).toEqual('http://localhost:8808/home')
        })
    });
});