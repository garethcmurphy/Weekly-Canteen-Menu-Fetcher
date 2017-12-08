import 'mocha';

import {expect} from 'chai'

import {Scraper} from "../src/index";


describe('Access Token', () => {
    it('checks token is string', () => {
        let access = new Scraper();
        let token = access.url;
        access.set_url();
        expect(token).to.be.a('string');
        expect(token).to.have.lengthOf(64);
    });
});
