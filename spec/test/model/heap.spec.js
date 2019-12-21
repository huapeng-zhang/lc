const { maxHeapify, minHeapify } = require("@model/heap");

describe('heap model', () => {
    it('max heap', () => {
        let cases = [{
            input: [4,10,3,5,1],
            output: [10,5,3,4,1]
        }, {
            input: [1,3,5,4,6,13,10,9,8,15,17],
            output: [17,15,13,9,6,5,10,4,8,3,1]
        }];

        cases.forEach(c => {
            maxHeapify.apply(null, [c.input, c.input.length-1]);

            expect(c.input).toEqual(c.output);
        });
    });
});
