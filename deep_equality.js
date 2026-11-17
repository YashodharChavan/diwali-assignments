const t = require("./deep_equality_tests");

function areObjectsEqual(a, b) {
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);

    if (keysA.length !== keysB.length) return false;

    for (const key of keysA) {
        if (!(key in b) || !isEqual(a[key], b[key])) return false;
    }

    return true;
}

function type(a) {
    if (Array.isArray(a)) return "array";
    return a === null ? "null" : typeof a;
}

function areTypesEqual(a, b) {
    return type(a) === type(b);
}

function isEqual(a, b) {
    if (a === b) return true;
    if (!areTypesEqual(a, b)) return false;

    switch (type(a)) {
        case "array":
        case "object":
            return areObjectsEqual(a, b);
    }

    return false;
}

function test(message, expected, a, b) {
    const actual = isEqual(a, b);
    const remark = actual === expected ? "✅" : "❌";

    console.log(`${remark} | ${message}`);
}

function main() {
    // hardcodedTests()
    objectifiedTest(t.testCases);
}

function hardcodedTests() {
    t.testBooleans(test);
    t.testNumbers(test);
    t.testStrings(test);
    t.testPrimitives(test);
    t.testArrays(test);
    t.testObjects(test);
    t.testMixObjects(test);
    t.testNullUndefinedNaN(test);
}

function objectifiedTest(testCases) {
    for (const testCase of testCases) {
        if (isEqual(testCase.input1, testCase.input2) === testCase.expected) {
            console.log(`✅ : ${testCase.title}`);
        } else {
            console.log(`❌ : ${testCase.title}`);
        }
    }
}

main();
