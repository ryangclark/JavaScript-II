// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function kingdom(monarch) {
  function knight(knightName) {
    return `The kingdom of ${monarch} is protected, in part, by a knight named ${knightName}.`
  }
  knight('Sir Sally');
}


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that, when invoked, increments and returns a counter variable.
  let count = 0;
  return function() {
    count++;
    console.log('Count:', count);
  }
};

// Example usage: const newCounter = counter();
const newCounter = counter();
newCounter(); // 1
newCounter(); // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let count = 0;
  function increment() {
    count++;
    console.log('Increment:', count);
    return count;
  }
  function decrement() {
    count--;
    console.log('Decrement:', count);
    return count;
  }
  counterFactory.increment = increment;
  counterFactory.decrement = decrement;
};

console.log('——— COUNTER FACTORY ———');

counterFactory();
incrementCount = counterFactory.increment;
decrementCount = counterFactory.decrement;

incrementCount();
incrementCount();
incrementCount();

decrementCount();
decrementCount();
decrementCount();
