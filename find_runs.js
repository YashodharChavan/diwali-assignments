const runs = [1, 2, 3, 4, 3, 2, 1];
const log = [];

function getCurrentRun(runs, idx) {
    const prevIdx = Math.max(idx - 1, 0);
    return Math.sign(runs[idx] - runs[prevIdx]);
}

function getRuns(runs) {
    const answer = [[]];
    let prev = 0;

    for (const idx in runs) {
        const curr = getCurrentRun(runs, idx);
        const isSignChanged = prev === -curr;
        const hasDirectionChanged = isSignChanged && curr;

        if (curr !== 0) prev = curr;

        if (hasDirectionChanged) {
            answer.push([]);
            prev = 0;
        }

        answer.at(-1).push(runs[idx]);
    }

    return answer;
}

console.log(getRuns(runs));
