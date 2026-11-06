function isAscending(array, startIdx, endIdx) {
    for (let i = startIdx; i < endIdx - 1; i++) {
        if (array[i] > array[i + 1]) return false;
    }

    return true;
}

function isDescending(array, startIdx, endIdx) {
    for (let i = startIdx; i < endIdx - 1; i++) {
        if (array[i] < array[i + 1]) return false;
    }

    return true;
}

function getRuns() {
    const runs = [1, 2, 3, 4, 5, 4, 3, 2, 1, 2, 3];
    const answer = [];

    let startIdx = 0;
    let endIdx = 0;
    let prevStatus = true;

    for (let i = 0; i < runs.length; i++) {
        const isSeqAscending = prevStatus && isAscending(runs, startIdx, endIdx)
        const isSeqDescending = !prevStatus && isDescending(runs, startIdx, endIdx)

        if (!isSeqAscending && !isSeqDescending) {
            prevStatus = !prevStatus;
            answer.push(runs.slice(startIdx, endIdx - 1))
            startIdx = endIdx - 1;
        }

        endIdx++;
    }
    answer.push(runs.slice(startIdx, endIdx))

    return answer;
}

console.log(getRuns())
