const s1 = require('@hard/lru_cache');

describe('least recently used cache', () => {
    let cases = null;

    beforeEach(() => {
        cases = [{
            method: 'new',
            params: [2]
        }, {
            method: 'put',
            params: [1,1],
        }, {
            method: 'put',
            params: [2,2]
        }, {
            method: 'get',
            params: [1],
            output: 1
        }, {
            method: 'put',
            params: [3,3]
        }, {
            method: 'get',
            params: [2],
            output: -1
        }, {
            method: 'put',
            params: [4,4]
        }, {
            method: 'put',
            params: [4,5]
        }, {
            method: 'get',
            params: [1],
            output: -1
        }, {
            method: 'get',
            params: [3],
            output: 3
        }, {
            method: 'put',
            params: [2,2]
        }, {
            method: 'get',
            params: [4],
            output: -1
        }];
    });

    it('solution 1', () => {
        let lru = null;

        cases.forEach(c => {
            if (c.method === 'new') {
                lru = new s1(...c.params);
                return;
            }
            const output = lru[c.method].apply(lru, c.params);
            if (c.output !== undefined) {
                expect(output).toEqual(c.output);
            }
        });
    });
});
