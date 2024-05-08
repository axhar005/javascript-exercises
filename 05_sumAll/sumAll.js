const sumAll = function(min, max) {
    if (!Number.isInteger(min) || !Number.isInteger(max) || min < 0 || max < 0){
        return "ERROR";
    }

    if (min > max){
        const temp = min;
        min = max;
        max = temp;
    }

    let count = 0;
    for (let i = min; i <= max; i++) {
        count += i;
    }
    return count;
};

// Do not edit below this line
module.exports = sumAll;
