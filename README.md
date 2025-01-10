# JavaScript Type Coercion Bug

This repository demonstrates a common, yet easily overlooked, bug in JavaScript related to type coercion and the `+` operator.  When performing addition with a mix of number and string types, JavaScript implicitly converts the number to a string and concatenates them.

## The Bug

The `bug.js` file shows a function `foo` that adds two arguments. However, if one argument is a string, the `+` operator performs string concatenation instead of numerical addition.

## The Solution

The `bugSolution.js` file demonstrates how to fix this by explicitly converting the string to a number using `parseInt()` or `parseFloat()` before the addition.