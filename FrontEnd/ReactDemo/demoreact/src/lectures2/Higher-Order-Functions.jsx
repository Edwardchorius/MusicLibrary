[1, 2, 3].reduce((sum, element) => {
  return sum + element;
}, 0);

// Function that takes as a param a function, returns a function or both
// It lets us manipulate each next element in a group of elements (of an array) into one single result, for example
// Map() is also a HOF, but the callback function that is a param of the HOF is to decide what to do with each element
// We use HOF when we want additional control over the internal logic of a function/method
