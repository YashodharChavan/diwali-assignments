const runs = [1, 1, 1, 1, 3, 2, 1, 2, 1];
const log = [];

function getCurrentRun(runs, idx) {
    return Math.sign(runs[idx] - runs[Math.max(idx - 1, 0)]);
}

function hasDirectionChanged(run, isSignChanged, curr) {
    return run.length && isSignChanged && curr
}

function getRuns(runs) {
    if (runs.length < 3) return runs;

    const answer = [];
    let run = [];
    let idx = 0;
    let prev = 0;

    while (idx < runs.length) {
        const curr = getCurrentRun(runs, idx);
        const isSignChanged = prev === -curr;

        prev = curr;

        if (run.length && isSignChanged && curr) {
            answer.push(run);
            run = [];
            prev = 0;
        }

        run.push(runs[idx++]);
    }

    answer.push(run);

    return answer;
}

console.log(getRuns(runs));
// console.table(log);
