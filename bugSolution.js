function foo(a, b) {
  // Explicit type conversion using parseInt
  return parseInt(a) + parseInt(b);
}

function bar() {
  let result = foo(1, '2');
  console.log(result); // Output: 3
}

bar();