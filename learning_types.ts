console.log("Your code goes here!");

function addition(n1: number, n2: number, showResult: boolean) {
  return n1 + n2;
}

const num1 = 5;
const num2 = 2.8;

const res = add(num1, num2);
console.log(res);

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
// assign labels to numbers

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

// behind the scenes, admin receives 0, author receives 2.

// get rid of explicit type declaration from before
const anotherPerson2 = {
  name: "Imy",
  age: 24,
  hobbies: ["Eating", "Being Smelly"],
  role: Role.ADMIN,
};

// Can use numbers to assign role e.g. 0, 1, 2.
// ADMIN: 0, READ ONLY: 1, AUTHOR, 2

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

if (anotherPerson2.role === "READ-ONLY") {
  // hard to remember how the exact role was written
  console.log("is read only");
}

if (anotherPerson2.role === "ADMIN") {
  console.log("is admin only");
}

if (anotherPerson2.role === Role.ADMIN) {
  console.log("is admin only");
}

if (anotherPerson2.role === Role.ADMIN) {
  console.log("is admin only");
}

// Any type is the most flexible in TS
// Doesn't tell TS anything
// Store any type of value
// Never throw errors
// Avoid at all costs
