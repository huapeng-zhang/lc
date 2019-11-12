const S1 = require('@easy/min_stack_1');

["MinStack","push","push","push","push","getMin","pop","getMin","pop","getMin","pop","getMin"]
    [[],[2],[0],[3],[0],[],[],[],[],[],[],[]]


describe('min stack', () => {
    it('solution 1', () => {
        let stack = new S1();

        stack.push(-2);
        stack.push(0);
        stack.push(-3);
        expect(stack.getMin()).toBe(-3);

        stack.pop();
        expect(stack.top()).toBe(0);
        expect(stack.getMin()).toBe(-2);

        stack = new S1();

        stack.push(2);
        stack.push(0);
        stack.push(3);
        stack.push(0);
        expect(stack.getMin()).toBe(0);

        stack.pop();
        expect(stack.getMin()).toBe(0);

        stack.pop();
        expect(stack.getMin()).toBe(0);

        stack.pop();
        expect(stack.getMin()).toBe(2);
    });
});