// Union type

function add(n1: number, n2: number) {
  const result = n1 + n2;
  return result;
}

// Want to be more flexible
// Previously, only work with numbers
// Now work with numbers and strings

function combine(input1: number | string, input2: number | string) {
  let result: string | number;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    return (result = input1.toString() + input2.toString());
  }
}

const combinedAges = combine(30, 26);
console.log(combinedAges);

const combinedNames = combine("Max", "Anna");
console.log(combinedNames);

// Literal types
// Specify exact value rather than just type

const literalNum = 2.5;

function join(
  input1: number | string,
  input2: number | string,
  resultConversion: "as-number" | "as-text"
) {
  let result: string | number;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    return (result = input1.toString() + input2.toString());
  }
}

const combinedAges2 = join(30, 26, "as-number");
console.log(combinedAges);

const combinedStringAges2 = join("30", "26", "as-number");
console.log(combinedStringAges2);

const combinedNames2 = join("Max", "Anna", "as-text");
console.log(combinedNames);

// Type aliases
// May be cumbersome to repeat types
// Declare with type keyword
// Not built into JS, comes with TS

type numOrStr = number | string;
type descriptor = "as-number" | "as-text";

// Reusable type alias
