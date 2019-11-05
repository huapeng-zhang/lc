const maxSubArray = require('@easy/max_subarray');

describe('max sub array', () => {
    it("should find the max sub array for normal case", () => {
        const subArray = maxSubArray([-2,1,-3,4,-1,2,1,-5,4]);

        expect(subArray).toEqual([4,-1,2,1]);
    });
});