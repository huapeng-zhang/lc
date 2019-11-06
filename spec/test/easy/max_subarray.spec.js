const maxSubArray1 = require('@easy/max_subarray_1');
const maxSubArray2 = require('@easy/max_subarray_2');
const maxSubArray3 = require('@easy/max_subarray_3');
const maxSubArray4 = require('@easy/max_subarray_4');

let case1 = [[-2,1,-3,4,-1,2,1,-5,4], 6];
let case2 = [[-2,-1], -1];
let case3 = [[2, 1], 3];

beforeEach(() => {
    case1 = [[-2,1,-3,4,-1,2,1,-5,4], 6];
    case2 = [[-2,-1], -1];
    case3 = [[2, 1], 3];
});

describe('max sub array solution 1', () => {
    it(`case 1 ${case1[0]}`, () => {
        expect(maxSubArray1(case1[0])).toEqual(case1[1]);
    });

    it(`case 2 ${case2[0]}`, () => {
        expect(maxSubArray1(case2[0])).toEqual(case2[1]);
    });

    it(`case 3 ${case3[0]}`, () => {
        expect(maxSubArray1(case3[0])).toEqual(case3[1]);
    });
});

describe('max sub array solution 2', () => {
    it(`case 1 ${case1[0]}`, () => {
        expect(maxSubArray2(case1[0])).toEqual(case1[1]);
    });

    it(`case 2 ${case2[0]}`, () => {
        expect(maxSubArray2(case2[0])).toEqual(case2[1]);
    });

    it(`case 3 ${case3[0]}`, () => {
        expect(maxSubArray2(case3[0])).toEqual(case3[1]);
    });
});

describe('max sub array solution 3', () => {
    it(`case 1 ${case1[0]}`, () => {
        expect(maxSubArray3(case1[0])).toEqual(case1[1]);
    });

    it(`case 2 ${case2[0]}`, () => {
        expect(maxSubArray3(case2[0])).toEqual(case2[1]);
    });

    it(`case 3 ${case3[0]}`, () => {
        expect(maxSubArray3(case3[0])).toEqual(case3[1]);
    });
});

describe('max sub array solution 4', () => {
    it(`case 1 ${case1[0]}`, () => {
        expect(maxSubArray4(case1[0])).toEqual(case1[1]);
    });

    it(`case 2 ${case2[0]}`, () => {
        expect(maxSubArray4(case2[0])).toEqual(case2[1]);
    });

    it(`case 3 ${case3[0]}`, () => {
        expect(maxSubArray4(case3[0])).toEqual(case3[1]);
    });
});