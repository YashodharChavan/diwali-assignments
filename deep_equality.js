const testCases = [
    {
        input1: { a: undefined },
        input2: { b: 1 },
        expected: false,
        title: "intentional undefined and absence of data",
    },
    {
        input1: { a: 1 },
        input2: { b: undefined },
        expected: false,
        title: "intentional undefined and absence of data",
    },
    {
        input1: 10,
        input2: 20,
        expected: false,
        title: "two integer equality check",
    },
    {
        input1: "a",
        input2: "a",
        expected: true,
        title: "basic string equality check",
    },
    {
        input1: [],
        input2: [],
        expected: true,
        title: "empty array equality check",
    },
    {
        input1: [1],
        input2: [1],
        expected: true,
        title: "same element array equality check",
    },
    {
        input1: [1],
        input2: [1, 2],
        expected: false,
        title: "different element array equality check",
    },
    {
        input1: 1,
        input2: "1",
        expected: false,
        title: "different primitive types equality check",
    },
    {
        input1: { a: 1 },
        input2: { a: 1 },
        expected: true,
        title: "same object equality check",
    },
    {
        input1: { a: 1 },
        input2: { b: 1 },
        expected: false,
        title: "object with same value but different keys",
    },
    {
        input1: { a: [1] },
        input2: { a: [1] },
        expected: true,
        title: "object with equal array as value",
    },
    {
        input1: { a: { b: 1 } },
        input2: { a: { b: 1 } },
        expected: true,
        title: "object with equal object as value",
    },
    {
        input1: null,
        input2: null,
        expected: true,
        title: "both values null",
    },
    {
        input1: null,
        input2: { a: 1 },
        expected: false,
        title: "null and object",
    },
    {
        input1: NaN,
        input2: NaN,
        expected: false,
        title: "NaN equality check",
    },
];

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

    return Array.isArray(a) ;
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
