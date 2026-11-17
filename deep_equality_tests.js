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
        input1: {},
        input2: {},
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

function testBooleans(test) {
    test("Two true booleans should be equal", true, true, true);
    test("Two false booleans should be equal", true, false, false);
    test("A true and a false boolean should not be equal", false, true, false);
}

function testNumbers(test) {
    test("Two same +ve numbers should be equal", true, 10, 10);
    test("Two same -ve numbers should be equal", true, -5, -5);
    test("A +ve and -ve number should not be equal", false, 5, -5);
    test("Different numbers should not be equal", false, 10, 32);
}

function testStrings(test) {
    test("Two same strings should be equal", true, "hello", "hello");
    test(
        "Two same text with different case should not be equal",
        false,
        "HELLO",
        "hello",
    );
    test("Two different strings should not be equal", false, "HELLO", "hello");
}

function testPrimitives(test) {
    test("A 'true' and true should not be equal", false, "true", true);
    test("A 'false' and 0 should not be equal", false, false, 0);
    test("A '0' and 0 should not be equal", false, "0", 0);
    test("A false and 0 should not be equal", false, false, 0);
}

function testArrays(test) {
    test("Two Empty arrays are equal", true, [], []);
    test("Two arrays with different length are not equal", false, [1, 2], [2]);
    test("Two arrays with different elements are not equal", false, [2], [1]);
    test("Two same nested arrays are equal", true, [[1, 2]], [[1, 2]]);
    test("Two diff nested arrays are not equal", false, [[2, 1]], [[1, 2]]);
}

function testObjects(test) {
    test("Two Empty objects are equal", true, {}, {});
    test(
        "Two objects with different keys same length are not equal",
        false,
        { a: 10 },
        { b: 10 },
    );
    test(
        "Two objects with same keys and values are equal",
        true,
        { a: 10 },
        { a: 10 },
    );
    test(
        "Two nested objects with same values are equal",
        true,
        { a: { a: 10 } },
        { a: { a: 10 } },
    );
}

function testMixObjects(test) {
    test("an empty array and empty object should be unequal", false, [], {});
    test("inditical array and identical object should be unequal", false, [1], {
        0: 1,
    });
    test("same nested object should be equal", true, { a: [10] }, { a: [10] });
    test(
        "different nested object should be equal",
        false,
        { a: [10, 10] },
        { a: [10] },
    );
    test(
        "object with different keys should not be equal",
        false,
        { a: 10 },
        { b: 10 },
    );
    test(
        "object with same keys different value should not be equal",
        false,
        { a: 10 },
        { a: 20 },
    );
    test("two array of empty objects are equal", true, [{}], [{}]);
    test(
        "two array of different objects are unequal",
        false,
        [{ a: 10 }],
        [{ a: 20 }],
    );
    test(
        "Same complex array and object are equal",
        true,
        [{ a: 10 }, [{}]],
        [{ a: 10 }, [{}]],
    );
}

function testNullUndefinedNaN(test) {
    test("two null values should be equal", true, null, null);
    test("two undefined values should be equal", true, undefined, undefined);
    test("null and undefined should be unequal", false, null, undefined);
    test("null and empty array should be unequal", false, null, []);
    test("null and empty object should be unequal", false, null, {});
    test("undefined and empty object should be unequal", false, undefined, {});
}


module.exports = {
    testCases,
    testBooleans,
    testNumbers,
    testStrings,
    testPrimitives,
    testArrays,
    testObjects,
    testNullUndefinedNaN,
    testMixObjects
}