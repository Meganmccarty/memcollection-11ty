// Need to import { expect } from jest; otherwise, it defaults to cypress import, which throws error
import { expect } from '@jest/globals';
import { divide } from './divide';

describe('divide', () => {
    it('divides two by two', () => {
        expect(divide(2, 2)).toEqual(1);
    });
});
