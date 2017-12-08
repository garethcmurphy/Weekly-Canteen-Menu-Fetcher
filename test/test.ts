import 'mocha';

import {expect} from 'chai'

import {Scraper} from "../src/index";


describe('Url', () => {
    it('checks url is string', () => {
        let access = new Scraper();
        access.set_url();
        let token = access.url;
        expect(token).to.be.a('string');
    });
});
