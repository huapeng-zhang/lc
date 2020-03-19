describe('compare === vs object', () => {

    it ('check time', () => {
        const head = {next: null};
        let prev = head;

        for (let i = 0; i < 1000000; i++) {
            const node = {val: i, next: null};
            prev.next = node;
            prev = node;
        }
        prev.next = head;

        // warming up
        let node = head;
        for (let i = 0; i < 1000000; i++) {
            node = node.next;
        }
        const loopCount = 1000000000;
        // start to compare with ===
        node = head;
        const start1 = Date.now();
        for (let i = 0; i < loopCount; i++) {
            if (node !== undefined) {
                node = node.next;
            }
        }
        const end1 = Date.now();
        // start to compare with object
        node = head;
        const start2 = Date.now();
        for (let i = 0; i < loopCount; i++) {
            if (node) {
                node = node.next;
            }
        }
        const end2 = Date.now();

        const duration1 = end1-start1;
        const duration2 = end2-start2;

        console.log("=== vs object", duration1, duration2, duration1/duration2);
    });
});