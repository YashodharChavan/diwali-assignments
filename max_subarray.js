function maximumSubarray(array) {
    let maxSum = -Infinity;
    let answer = [];
    let sum = 0;

    for (let startIdx = 0; startIdx < array.length; startIdx++) {
        sum = 0;
        for (let endIdx = startIdx; endIdx < array.length; endIdx++) {
            sum += array[endIdx];

            if (maxSum < sum) {
                answer = array.slice(startIdx, endIdx + 1)
                maxSum = sum;
            }
        }
    }

    return answer;
}


const input = [7, -3, 4, -2, 5, -10, 6];
console.log(maximumSubarray(input))