const fruits = ["apple", "banana", "apple", "apple", "orange", "banana"];

const freq = {}

for (const fruit of fruits) {
    freq[fruit] = !freq[fruit] ? 1 : freq[fruit] + 1;
}

console.log(freq)