/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    if (!height || height.length <= 2) {
        return 0;
    }

    /* 总的雨水收集能力等于每一个位置的雨水收集能力之和
    /* 某一个位置的雨水收集能力的计算方式如下：
    /*   leftMaxHeight：其左侧的最高高度，若是第0个元素，leftMaxHeight=0.
    /*   rightMaxHeight：其右侧的最高高度，若是最后一个元素，值为0
    /*   若该位置的高度大于min(leftMaxHeight, rightMaxHeight)，该位置的雨水收集量为0
    /*   否则该位置的雨水收集量为min(leftMaxHeight, rightMaxHeight)-该位置高度
     */

    // 第一轮扫描是保存当前位置的左侧最高高度
    const maxHeight = [height[0]];
    let volume = 0;

    for (let i = 1; i < height.length-1; i++) {
        maxHeight.push(height[i] > maxHeight[i-1] ? height[i] : maxHeight[i-1]);
    }

    // 第二轮扫描时保存当前位置右侧的最高高度
    maxHeight[height.length-1] = height[height.length-1];
    for (let i = height.length-2; i >= 1; i--) {
        const min = maxHeight[i-1] < maxHeight[i+1] ? maxHeight[i-1] : maxHeight[i+1];
        volume += height[i] >= min ? 0 : min - height[i];
        maxHeight[i] = maxHeight[i+1] > height[i] ? maxHeight[i+1] : height[i];
    }
    return volume;
};

module.exports = trap;
