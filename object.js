const person = { name: "Asha", age: 23 };

// const name = person.name;
// const age = person.age;


function describe({ name, age }) {
    console.log(`${name} is ${age} years old`)
}

describe(person)