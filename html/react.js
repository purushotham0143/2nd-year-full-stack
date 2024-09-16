const array = ['2', '2', '3', '6', '7', '9', '5'];

// Convert the array to a Set to remove duplicates
const uniqueSet = new Set(array);

// Convert the Set back to an array
const uniqueArray = Array.from(uniqueSet);

console.log(uniqueArray);
