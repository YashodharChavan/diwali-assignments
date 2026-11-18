const runs = [1, 2, 3, 4, 5, 5, 5, 4, 4, 3, 3, 2, 1, 1, 1, 1];

function doesBelongToCurrentRun(run, element) {
    if (run.length <= 1) return true;

    const currDirection = Math.sign(element - run.at(-1));
    const prevDirection = Math.sign(run.at(-1) - run.at(-2));

    return (
        currDirection === prevDirection ||
        (currDirection === 0 && prevDirection === 1)
    );
}

function getRuns(runs) {
    const answer = [[]];
    for (const run of runs) {
        if (!doesBelongToCurrentRun(answer.at(-1), run)) {
            answer.push([]);
        }

        answer.at(-1).push(run);
    }

    return answer;
}

console.log(getRuns(runs));
