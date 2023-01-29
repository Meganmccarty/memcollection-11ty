// Need to import { expect } from jest; otherwise, it defaults to cypress import, which throws error
import { expect } from '@jest/globals';
import { multiply } from './multiply';

describe('multiply', () => {
    it('multplies three by three', () => {
        expect(multiply(3, 3)).toEqual(9);
    });
});
