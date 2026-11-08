const testCases = [
    { a: 1, b: 1, expected: true },
    { a: "a", b: "a", expected: true },
    { a: [], b: [], expected: true },
    { a: [1], b: [1], expected: true },
    { a: [1], b: [1, 2], expected: false },
    { a: 1, b: "1", expected: false },
    { a: { a: 1 }, b: { a: 1 }, expected: true },
    { a: { a: 1 }, b: { b: 1 }, expected: false },
    { a: { a: [1] }, b: { a: [1] }, expected: true },
    { a: { a: { b: 1 } }, b: { a: { b: 1 } }, expected: true },
];

function getType(a) {
    return Array.isArray(a) ? 'array' : typeof a;
}

function isEqual(a, b) {
    if (typeof a !== 'object' && typeof b !== 'object') return a === b;
    if (getType(a) !== getType(b)) return false;
    if (Object.keys(a).length !== Object.keys(b).length) return false;

    for (let key of Object.keys(a)) {
        if (!isEqual(a[key], b[key])) return false;
    }

    return true;
}

function test(testCases) {
    for (const testCase of testCases) {
        if (isEqual(testCase.a, testCase.b) === testCase.expected) {
            console.log("TEST STATUS: PASS")
        }
        else {
            console.log("TEST STATUS: FAIL")
        }
    }
}

test(testCases);