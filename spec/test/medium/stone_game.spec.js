const s1 = require('@medium/stone_game_1');

describe('stone game', () => {
    let cases = null;

    beforeEach(() => {
        cases = [{
            input: [[5,3,4,5]],
            output: true
        }];
    });

    it('solution 1', () => {
        cases.forEach(c => {
            expect(s1.apply(null, c.input)).toEqual(c.output);
        });
    });
});
