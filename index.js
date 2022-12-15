const arr = ["1", "2", "3", "4", "5", "1A", "1B", "1C", "2A", "2B", "2C"];

// Disorder
// I need to add the array with the spread operator to create a new array because the pass by reference
// if I don't pass it the value in arr will be changed by the sort method.
// (Because sort works with in-place and not out-of-place this means that will change the array worked)

// 0.5 - Math.random is a good way to randomize a function because this would pass a positive or negative value to sort
// but it doesn't the best way to make a random sort, the algorithm called Fisher-Yates shuffle would be a more
// random solution
const disorder = [...arr].sort(() => 0.5 - Math.random());
console.log(`Disorder Result: ${disorder}`);

// Ascendant
const ascendant = [...arr].sort(() => 1);

console.log(`Ascendant Result: ${ascendant}`);

// Descendent
const decendent = [...arr].sort(() => -1);
console.log(`Descendent Result: ${decendent}`);

// TODO: Removing the numbers with letters

// TODO: Removing the numbers without letters

// Output
console.log(`Original Array result: ${arr}`);
D