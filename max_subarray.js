function calcSum(array, startIdx, endIdx) {
    let sum = 0;

    for(let idx = startIdx; idx<endIdx; idx++) {
        sum+=array[idx]
    }

    return sum
}

function maximumSubarray(array) {
    let maxSum = -Infinity;
    let answer = [];
    
    for(let i=0; i<array.length; i++) {
        for(let j=i+1; j<array.length; j++) {
            const sum = calcSum(array, i, j);

            if(maxSum < sum) {
                answer = array.slice(i, j)
                maxSum = sum;
            }
        }
    }

    return answer;
}
const input = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maximumSubarray(input))