const s1 = require('@medium/jump_game_1');

describe('jump game', () => {
    let cases = null;

    beforeEach(() => {
        cases = [{
            input: [[2,3,1,1,4]],
            output: true
        }, {
            input: [[3,2,1,0,4]],
            output: false
        }, {
            input: [[0]],
            output: true
        }];
    });

    it('solution 1', () => {
        cases.forEach(c => expect(s1.apply(null, c.input)).toEqual(c.output));
    });
});
