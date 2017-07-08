const expect = require('expect');
const _ = require('lodash');

const {Item, Shop} = require('./gilded-rose');

describe('gilded rose', () => {
    it('does nothing', () => {
       const item = new Item('item name', 5, 5);
       const shop = new Shop([item]);

       shop.updateQuality();
       expect(item).toBe('updated');
    });
});
