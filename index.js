//Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.
//1

function filterRange(arr, a, b) {

  let retval = arr.filter((p) => p >= a && p <= b);

  return retval;
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);
let filter2 =filterRange(arr,2,5)

console.log(filtered); // 3,1 (matching values)
console.log(filter2);


console.log("---------------------------------------------------");

//Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.
//2
function filterRangeInPlace(arr, a, b) {
  
let filtered = arr.filter((p) => !(p >= a && p <= b));

filtered.forEach((t)=> arr.splice(arr.indexOf(t),1) )

return arr;
} 

let array = [5, 3, 8, 1];

console.log(filterRangeInPlace(array, 1, 4)); ; // removed the numbers except from 1 to 4


