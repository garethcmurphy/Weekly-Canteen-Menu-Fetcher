import 'mocha';

import {expect} from 'chai'

import {Scraper} from "../src/index";

import {} from 'jasmine';


describe('Access Token', () => {
    it('checks token is string', () => {
        let access = new Scraper();
        let token = access.access_token;
        expect(token).to.be.a('string');
        expect(token).to.have.lengthOf(64);
    });
});
