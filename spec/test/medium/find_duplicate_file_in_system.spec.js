const s1 = require('@medium/find_duplicate_file_in_system_1');

describe('find duplicate file in system', () => {
    let cases = null;

    beforeEach(() => {
        cases = [{
            input: [[
                "root/a 1.txt(abcd) 2.txt(efgh)",
                "root/c 3.txt(abcd)",
                "root/c/d 4.txt(efgh)",
                "root 4.txt(efgh)"]],
            output: [["root/a/2.txt","root/c/d/4.txt","root/4.txt"],["root/a/1.txt","root/c/3.txt"]]
        }];
    });

    it('solution 1', () => {
        cases.forEach(c => {
            const ret = s1.apply(null, c.input);
            expect(c.output.length).toEqual(ret.length);
            ret.forEach(item => expect(c.output).toContain(item));
        });
    });
});
