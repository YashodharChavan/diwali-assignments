function maximumSubarray(array) {
    let maxSum = -Infinity;
    let answer = [];
    let sum = 0;

    for (let startIdx = 0; startIdx < array.length; startIdx++) {
        sum = 0;
        for (let endIdx = startIdx; endIdx < array.length; endIdx++) {
            sum += array[endIdx];

            if (maxSum < sum) {
                answer = array.slice(startIdx, endIdx + 1);
                maxSum = sum;
            }
        }
    }

    return answer;
}

const kadanesAlgorithm = function (array) {
    let current = array[0];
    let maxSum = array[0];
    let bestStart = 0;
    let currStart = 0;
    let endIdx = 0;

    for (let i = 1; i < array.length; i++) {
        if (array[i] > current + array[i]) {
            currStart = i;
            current = array[i];
        } else current += array[i];

        if (current > maxSum) {
            bestStart = currStart;
            endIdx = i;
            maxSum = current;
        }
    }

    return array.slice(currStart, endIdx + 1);
};

const input = [7, -3, 4, -2, 5, -10, 6];
console.log(kadanesAlgorithm(input));
