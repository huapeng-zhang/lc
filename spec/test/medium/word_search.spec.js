const s1 = require('@medium/word_search_1');

describe('word search', () => {
    let cases = [{
        input: [[
            ['A','B','C','E'],
            ['S','F','C','S'],
            ['A','D','E','E']
        ], 'ABCCED'],
        output: true
    }, {
        input: [[
            ['A','B','C','E'],
            ['S','F','C','S'],
            ['A','D','E','E']
        ], 'SEE'],
        output: true
    }, {
        input: [[
            ['A','B','C','E'],
            ['S','F','C','S'],
            ['A','D','E','E']
        ], 'ABCB'],
        output: false
    }, {
        input: [[['a']], 'a'],
        output: true
    }, {
        input: [[
            ["A","B","C","E"],
            ["S","F","E","S"],
            ["A","D","E","E"]
        ], 'ABCESEEEFS'],
        output: true
    }];

    it('solution 1', () => {
        cases.forEach(c => {
            expect(s1.apply(null, c.input)).toEqual(c.output);
        });
    });
});
