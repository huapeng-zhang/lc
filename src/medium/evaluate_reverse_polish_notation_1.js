/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const stack = [];
    for(let i = 0; i < tokens.length; i++) {
        const token = tokens[i];
        let op1, op2;
        switch(token) {
            case '+':
                op2 = stack.pop();
                op1 = stack.pop();
                stack.push(op1+op2);
                break;
            case '-':
                op2 = stack.pop();
                op1 = stack.pop();
                stack.push(op1-op2);
                break;
            case '*':
                op2 = stack.pop();
                op1 = stack.pop();
                stack.push(op1*op2);
                break;
            case '/':
                op2 = stack.pop();
                op1 = stack.pop();
                op1 = op1/op2;
                op1 = op1 > 0 ? Math.floor(op1) : Math.ceil(op1);
                stack.push(op1);
                break;
            default:
                stack.push(parseInt(token));
                break;
        }
    }
    return stack.pop();
};

module.exports = evalRPN;
