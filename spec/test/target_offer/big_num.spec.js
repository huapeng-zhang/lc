const s1 = require('@target_offer/big_num_1');

describe('big number', () => {
    let cases = null;

    beforeEach(() => {
        const zero = new s1();
        zero.data = [0];

        const num_12345 = new s1();
        num_12345.data = [12345];

        const num_negative_12345 = new s1();
        num_negative_12345.data = [12345];
        num_negative_12345.isPositive = false;

        const num_12345678901234567890 = new s1();
        num_12345678901234567890.data = [678901234567890, 12345];

        const num_1000_000000000000000 = new s1();
        num_1000_000000000000000.parse('1000000000000000000');
        const num_0_1 = new s1();
        num_0_1.parse('1');
        const num_999_000000000000000 = new s1();
        num_999_000000000000000.parse('999000000000000000');

        const num_1111_000000000000000 = new s1();
        num_1111_000000000000000.parse('1111000000000000000');

        const num_999_999999999999999 = new s1();
        num_999_999999999999999.parse('999999999999999999');

        const num_25_0000000000000000 = new s1();
        num_25_0000000000000000.parse('250000000000000000');
        const num_25_000000000000001 = new s1();
        num_25_000000000000001.parse('25000000000000001');

        const num_25_000000000000092 = new s1();
        num_25_000000000000092.parse('25000000000000092');
        const num_5_000000000000099 = new s1();
        num_5_000000000000099.parse('5000000000000099');
        const num_30_000000000000101 = new s1();
        num_30_000000000000101.parse('30000000000000101');

        cases = [{
            methods: ['parse'],
            params: [[null]],
            throws: Error
        }, {
            methods: ['parse'],
            params: [['']],
            throws: Error
        }, {
            methods: ['parse'],
            params: [['-']],
            throws: Error
        }, {
            methods: ['parse'],
            params: [['   ']],
            throws: Error
        }, {
            methods: ['parse'],
            params: [[' 0 ']],
            output: zero
        }, {
            methods: ['parse'],
            params: [['12345']],
            output: num_12345
        }, {
            methods: ['parse'],
            params: [['+12345']],
            output: num_12345
        }, {
            methods: ['parse'],
            params: [[' +  12345 ']],
            output: num_12345
        }, {
            methods: ['parse'],
            params: [[' +  00000000000000012345 ']],
            output: num_12345
        }, {
            methods: ['parse'],
            params: [[' + 12a3 ']],
            throws: Error
        }, {
            methods: ['parse'],
            params: [[' - 12345 ']],
            output: num_negative_12345
        }, {
            methods: ['parse'],
            params: [['-12345']],
            output: num_negative_12345
        }, {
            methods: ['parse'],
            params: [['12345678901234567890']],
            output: num_12345678901234567890
        }, {
            methods: ['parse', 'toString'],
            params: [['12345'], []],
            output: '12345'
        }, {
            methods: ['parse', 'toString'],
            params: [['- 12345'], []],
            output: '-12345'
        }, {
            methods: ['parse', 'toString'],
            params: [['- 12345'], []],
            output: '-12345'
        }, {
            methods: ['parse', 'toString'],
            params: [['12345678901234567890'], []],
            output: '12345678901234567890'
        }, {
            methods: ['parse', 'equals'],
            params: [['12345678901234567890'], [num_12345678901234567890]],
            output: true
        }, {
            methods: ['parse', 'equals'],
            params: [['12345678901234567890'], [num_12345]],
            output: false
        }, {
            methods: ['parse', 'equals'],
            params: [['12345'], '12345'],
            throws: Error
        }, {
            methods: ['parse', 'greaterThan'],
            params: [['12345678901234567890'], [num_12345]],
            output: true
        }, {
            methods: ['parse', 'greaterThan'],
            params: [['12345'], [num_12345678901234567890]],
            output: false
        }, {
            methods: ['parse', 'greaterThan'],
            params: [['12345'], ['12345']],
            throws: Error
        }, {
            methods: ['parse', 'subtract', 'toString'],
            params: [['1000000000000000000'], [num_0_1], []],
            output: '999999999999999999'
        }, {
            methods: ['parse', 'subtract', 'toString'],
            params: [['1111000000000000000'], [num_1111_000000000000000], []],
            output: '0'
        }, {
            methods: ['parse', 'add', 'toString'],
            params: [['999999999999999999'], [num_0_1], []],
            output: '1000000000000000000'
        }, {
            methods: ['parse', 'add', 'toString'],
            params: [['25000000000000000'], [num_0_1], []],
            output: '25000000000000001'
        }, {
            methods: ['parse', 'add', 'toString'],
            params: [['25000000000000002'], [num_5_000000000000099], []],
            output: '30000000000000101'
        }];
    });

    it('solution 1', () => {
        function executeCase(c) {
            const bigNum = new s1();
            let ret;
            for (let i = 0; i < c.methods.length; i++) {
                ret = bigNum[c.methods[i]].apply(bigNum, c.params[i]);
            }
            return ret;
        }

        cases.forEach(c => {
            if (c.throws === undefined) {
                expect(executeCase(c)).toEqual(c.output);
            } else {
                expect(() => executeCase(c)).toThrowError(c.throws);
            }
        });
    });
});

