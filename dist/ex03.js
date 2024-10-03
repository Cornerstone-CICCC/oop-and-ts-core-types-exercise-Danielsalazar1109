"use strict";
// Exercise: Write a function `logValues` that takes an array of any type of values (numbers, strings, booleans, etc.).
// The function should iterate through the array and log each value along with its type.
function logValues(values) {
    for (let i = 0; i < values.length; i++) {
        let value = values[i];
        if (typeof value === 'object' && value !== null) {
            value = JSON.stringify(value);
        }
        console.log(`${value} (${typeof values[i]})`);
    }
}
logValues([42, "Hello", true, { name: "Alice" }]);
// Expected output:
// 42 (number)
// "Hello" (string)
// true (boolean)
// { name: "Alice" } (object)
