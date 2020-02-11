
function BigNum() {
    // 由低位到高位保存每一段数字，data[0] 为lest significant digits
    this.data = [0];
    this.isPositive = true;
}

BigNum.prototype.RANGE_MAX = 999999999999999;

BigNum.prototype.RANGE_LEN = 15;

BigNum.prototype.parse = function (str) {
    if (!str) {
        throw new Error('Empty string');
    }

    let startPos = 0;
    // 去除前置空格
    while (startPos < str.length && str.charAt(startPos) === ' ') startPos++;
    if (startPos === str.length) {
        throw new Error('Blank string')
    }

    let isPositive = true;
    // 检查字符串中的符号位
    if (str.charAt(startPos) === '-') {
        isPositive = false;
        startPos++;
    } else if (str.charAt(startPos) === '+') {
        startPos++;
    }

    // 去除符号位之后的空格
    while (startPos < str.length && str.charAt(startPos) === ' ') startPos++;
    // 去除前导0
    while (startPos < str.length && str.charAt(startPos) === '0') startPos++;
    if (startPos === str.length) {
        throw new Error('Blank string after sign');
    }

    // 去除后置空格
    let endPos = str.length - 1;
    while (endPos >= 0 && str.charAt(endPos) === ' ') endPos--;

    // 检查是否有非法字符
    const zeroCode = '0'.charCodeAt(0);
    const nineCode = '9'.charCodeAt(0);
    for (let i = startPos; i < endPos; i++) {
        const code = str.charCodeAt(i);
        if (code < zeroCode || code > nineCode) {
            throw new Error(`Invalid char ${str.charAt(i)} at position ${i} for string ${str}`);
        }
    }

    // 从低位到高位解析数字
    const data = [];
    let rangeEnd = endPos;
    let rangeStart;
    while (rangeEnd >= startPos) {
        rangeStart = rangeEnd - this.RANGE_LEN + 1;
        rangeStart < startPos && (rangeStart = startPos);
        const rangeVal = parseInt(str.substring(rangeStart, rangeEnd+1), 10);
        data.push(rangeVal);
        rangeEnd = rangeStart-1;
    }

    // 确保0也占1位
    if (data.length === 0) {
        data.push(0);
    }

    // 确保只有+0，没有-0
    if (data[0] > 0 || data.length > 1) {
        this.isPositive = isPositive;
    }

    this.data = data;
    return this;
};

BigNum.prototype.toString = function() {
    let str = '';
    if (!this.isPositive) {
        str += '-';
    }
    for (let i = this.data.length - 1; i >= 0; i--) {
        const subStr = this.data[i] + '';

        if (i !== this.data.length - 1) {
            for (let j = 0; j < this.RANGE_LEN - subStr.length; j++) {
                str += '0';
            }
        }
        str += this.data[i];
    }
    return str;
};

BigNum.prototype.equals = function (other) {
    if (!(other instanceof BigNum)) {
        throw new Error('Can not compare BigNum with non-BigNum');
    }

    if (this.isPositive !== other.isPositive) {
        return false;
    }
    return this.absEquals(other);
};

BigNum.prototype.absEquals = function(other) {
    let mostSignificantPos1 = this.data.length - 1;
    while (mostSignificantPos1 >= 0 && this.data[mostSignificantPos1] === 0) {
        mostSignificantPos1--;
    }

    let mostSignificantPos2 = other.data.length - 1;
    while (mostSignificantPos2 >= 0 && this.data[mostSignificantPos2] === 0) {
        mostSignificantPos2--;
    }

    if (mostSignificantPos1 !== mostSignificantPos2) {
        return false;
    }

    while (mostSignificantPos1 >= 0) {
        if (this.data[mostSignificantPos1] !== other.data[mostSignificantPos2]) {
            return false;
        }
        mostSignificantPos1--;
        mostSignificantPos2--;
    }

    return true;
};

BigNum.prototype.greaterThan = function(other) {
    if (!(other instanceof BigNum)) {
        throw new Error('Can not compare BigNum with non-BigNum');
    }

    if (this.isPositive && !other.isPositive) {
        return true;
    } else if (!this.isPositive && other.isPositive) {
        return false;
    }

    const isAbsGreater = this.absGreaterThan(other);
    return this.isPositive ? isAbsGreater : !isAbsGreater;
};

BigNum.prototype.absGreaterThan = function(other) {
    let mostSignificantPos1 = this.data.length - 1;
    while (mostSignificantPos1 >= 0 && this.data[mostSignificantPos1] === 0) {
        mostSignificantPos1--;
    }

    let mostSignificantPos2 = other.data.length - 1;
    while(mostSignificantPos2 >= 0 && other.data[mostSignificantPos2] === 0) {
        mostSignificantPos2--;
    }

    if (mostSignificantPos1 > mostSignificantPos2) {
        return true;
    } else if (mostSignificantPos1 < mostSignificantPos2) {
        return false;
    }

    while (mostSignificantPos1 >= 0) {
        if (this.data[mostSignificantPos1] > other.data[mostSignificantPos2]) {
            return true;
        } else if (this.data[mostSignificantPos1] < other.data[mostSignificantPos2]) {
            return false;
        }

        mostSignificantPos1--;
        mostSignificantPos2--;
    }

    return false;
};

BigNum.prototype.add = function(other, forSubtraction) {
    if (!(other instanceof BigNum)) {
        throw new Error('Can not calculate BigNum with non-BigNum');
    }

    let isOtherPositive = other.isPositive;
    if (forSubtraction) {
        isOtherPositive = !isOtherPositive;
    }

    if (this.isPositive === isOtherPositive) {
        this.data = this.absAdd(this.data, other.data);
    } else {
        const absBigger = this.absGreaterThan(other);
        if (absBigger) {
            this.data = this.absSubtract(this.data, other.data);
        } else {
            this.isPositive = isOtherPositive;
            this.data = this.absSubtract(other.data, this.data);
        }

        if (this.data.length === 1 && this.data[0] === 0) {
            this.isPositive = true;
        }
    }

    return this;
};

BigNum.prototype.subtract = function (other) {
    return this.add(other, true);
};

/**
 * 无符号计算加法
 *
 * @param {number[]} data1
 * @param {number[]} data2
 * @return {number[]}
 */
BigNum.prototype.absAdd = function(data1, data2) {
    let lestSignificantPos1 = 0;
    let lestSignificantPos2 = 0;

    let data = [];
    let carry = 0;
    while (lestSignificantPos1 < data1.length || lestSignificantPos2 < data2.length || carry) {
        let rangeValue = carry;
        if (lestSignificantPos1 < data1.length) {
            rangeValue += data1[lestSignificantPos1];
        }
        if (lestSignificantPos2 < data2.length) {
            rangeValue += data2[lestSignificantPos2];
        }

        if (rangeValue > this.RANGE_MAX) {
            carry = 1;
            rangeValue = rangeValue - this.RANGE_MAX - 1;
        } else {
            carry = 0;
        }
        data.push(rangeValue);

        lestSignificantPos1++;
        lestSignificantPos2++;
    }
    return data;
};

/**
 * 无符号计算减法，参数一必须大于或等于参数二
 *
 * @param {number[]} data1
 * @param {number[]} data2
 * @return {number[]}
 */
BigNum.prototype.absSubtract = function(data1, data2) {
    let lestSignificantPos1 = 0;
    let lestSignificantPos2 = 0;
    let carry = 0;

    let data = [];
    while (lestSignificantPos1 < data1.length || lestSignificantPos2 < data2.length || carry !== 0) {
        let rangeValue = data1[lestSignificantPos1] + carry;
        if (lestSignificantPos2 < data2.length) {
            rangeValue -= data2[lestSignificantPos2];
        }

        if (rangeValue < 0) {
            rangeValue = rangeValue + this.RANGE_MAX + 1;
            carry = -1;
        } else {
            carry = 0;
        }
        data.push(rangeValue);

        lestSignificantPos1++;
        lestSignificantPos2++;
    }

    while (lestSignificantPos1 < data1.length) {
        data.push(data1[lestSignificantPos1]);
        lestSignificantPos1++;
    }

    let mostSignificantPos = data.length - 1;
    while (mostSignificantPos >= 0 && data[mostSignificantPos] === 0) {
        mostSignificantPos--;
    }

    // 压实数组，去掉高位不必要的字段
    data = data.slice(0, mostSignificantPos+1);
    if (data.length === 0) {
        data.push(0);
    }
    return data;
};

module.exports = BigNum;
