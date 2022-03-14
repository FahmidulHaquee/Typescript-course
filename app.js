console.log("Your code goes here!");
function add(n1, n2) {
    return n1 + n2;
}
var number1 = 5;
var number2 = 2.8;
var result = add(number1, number2);
console.log(result);
var number3 = "5";
var number4 = 2.8;
var result2 = add(number3, number4); // ide complaining, also error in terminal
console.log(result2);
// only helps during compilation
// browser does not have built-in TS support
// adds extra sanity check
// helps during development
// ts is static-typed
