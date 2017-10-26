//  1. Correct the variable scope so that the console.log call
//  outputs the correct value for x (5) even after double(6) is
//  called:

var x = 5;

function double(num) {
  var x = 0; /* Initialized x in the scope of function double */
  x = num * 2;
  return x;
}

double(6);
console.log('The value of x is:', x, 'It should be 5.');

//  2. Rewrite the corrected JavaScript above as a self-executing
//  anonymous function that does not pollute the global
//  namespace (e.g., neither its variables nor the double
//  function can be accessed via the `window` global object,
//  like `window.x`):

(function() {
  var x = 5;

  console.log(double(6));
  console.log('The value of x is:', x, 'It should be 5.');

  function double(num) {
    var x = 0;
    x = num * 2;
    return x;
  }
})();

//  3. Correct this function so that there is no i variable in
//  the global scope:

function arrayEach(array, func) {
  for (var i = 0; i < array.length; i++) {
    func(array[i]);
  }
}

arrayEach(['red', 'green', 'blue'], console.log);

console.log(i); // should be 'undefined', not 3

//  4. Explain why this function does not modify the global
//  variable x declared on line 5 above. Write your explanation
//  as JavaScript comments.

/* ANSWER:
    The constructor variable x in the function addTwo is declared more
    recently than the global declaration of x, which means that a another
    memory allocation will be made with the same variable name. However,
    this newer memory allocation will represent x within the scope of the
    function, which when assigned a value or modified, will not change the
    value of global variable x; since they are seperate memory allocations. If
    the declaration was made in the same scope, the same memory allocation of
    the variable x declared earlier in the scope would be modified.
*/

function addTwo(x) {
  x = x + 2;
  return x;
}

console.log(addTwo(4)); // 6
console.log(x); // should be 5 if you corrected the double() function above
