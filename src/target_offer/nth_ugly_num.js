
function nthUglyNum(nth) {
    const ugly = [1,2,3,4,5];

    let t2 = 1;
    let t3 = 1;
    let t5 = 1;
    while (ugly.length < nth) {
        let m2,m3,m5;
        while ((m2 = ugly[t2+1]*2) <= ugly[ugly.length-1]) t2++;
        while ((m3 = ugly[t3+1]*3) <= ugly[ugly.length-1]) t3++;
        while ((m5 = ugly[t5+1]*5) <= ugly[ugly.length-1]) t5++;

        let min = m2 < m3 ? m2 : m3;
        min = min < m5 ? min : m5;
        ugly.push(min);
    }

    return ugly[nth-1];
}

module.exports = nthUglyNum;
