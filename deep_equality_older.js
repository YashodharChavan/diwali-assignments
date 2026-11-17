const { testCases } = require("./deep_equality_tests");

function getType(a) {
    if (Array.isArray(a)) return "array";
    return a === null ? "null" : typeof a;
}

function isEqual(a, b) {
    if (a === b) return true;
    if (getType(a) !== getType(b)) return false;
    if (Object.keys(a).length !== Object.keys(b).length) return false;

    for (const key in a) {
        if (!(key in b)) return false;
        return isEqual(a[key], b[key]);
    }

    return typeof a === "object";
}

function test(testCases) {
    for (const testCase of testCases) {
        if (isEqual(testCase.input1, testCase.input2) === testCase.expected) {
            console.log(`✅ : ${testCase.title}`);
        } else {
            console.log(`❌ : ${testCase.title}`);
        }
    }
}

test(testCases);
