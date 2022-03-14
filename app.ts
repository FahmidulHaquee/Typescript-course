console.log("Your code goes here!");

function add(n1: number, n2: number, showResult: boolean) {
  return n1 + n2;
}

const number1 = 5;
const number2 = 2.8;

const result = add(number1, number2);
console.log(result);

// only helps during compilation
// browser does not have built-in TS support
// adds extra sanity check
// helps during development
// ts is static-typed

const person: {
  name: string;
  age: number;
} = {
  name: "Fam",
  age: 24,
};

console.log(person);

const student = {
  name: "Fam",
  age: 24,
  hobbies: ["Football", "Reading"],
  role: [2, "Author"],
};

let favouriteActivities: string[];
favouriteActivities = ["Sports", 1];

for (const hobby of student.hobbies) {
  console.log(hobby.toUpperCase()); // autocompletes string methods
  // writing code is now easier
  console.log(hobby.map());
}

// Tuple type - JS does not have this
// Fixed length and type array

const anotherPerson: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: "Imy",
  age: 24,
  hobbies: ["Eating", "Being Smelly"],
  role: [2, "Author"],
};

// inference does not work how we want in this example
// need to explicitly state types

anotherPerson.role.push("Admin"); // push is an exception to tuples
anotherPerson.role[1] = 10;

// enum {NEW, OLD}
// automatically enumerating global const indentifiers

const anotherPerson2 = {
  name: "Imy",
  age: 24,
  hobbies: ["Eating", "Being Smelly"],
  role: 
};
