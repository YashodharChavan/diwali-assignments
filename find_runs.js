const runs =[1, 2, 3, 4, 6, 4, 2, 1, 2, 3];;
const answer = []

let startIdx = 0;
let endIdx = 0;
let prevStatus = true;

function isAscending(array) {
    if (array.length < 2) return prevStatus;

    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) return false;
    }

    return true;
}

function isDescending(array) {
    if (array.length < 2) return prevStatus;

    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] < array[i + 1]) return false;
    }

    return true;
}

for (let i = 0; i < runs.length; i++) {
    if (prevStatus && isAscending(runs.slice(startIdx, endIdx))) {
        endIdx++;
    }
    else if (!prevStatus && isDescending(runs.slice(startIdx, endIdx))) {
        endIdx++;
    }
    else {
        prevStatus = !prevStatus;
        answer.push(runs.slice(startIdx, endIdx - 1))
        startIdx = endIdx-1;
        endIdx++;
    }
}

answer.push(runs.slice(startIdx, endIdx))
console.log(answer)

