/*
Given an array of positive and negative integers, find the largest sum.
*/

let largestSum = (array) => {
  if(array.length < 1){
    return -1;
  }
  if(array.length === 1){
    return array[0];
  }
  if(array.length === 2){
    return array[0] + array[1];
  }

  let largest, secondLargest;

  if (array[0] > array[1]){
    largest = array[0];
    secondLargest = array[1]
  } else {
    largest = array[1];
    secondLargest = array[0]
  }

  for(let i = 2; i < array.length; i++){
    if(array[i] > secondLargest){
      if(array[i] > largest){
        secondLargest = largest;
        largest = array[i];
      } else {
        secondLargest = array[i];
      }
    }
  }
  let sum = largest + secondLargest;
  return sum;
}

let a = largestSum([3, 2, -1, 5, 7, -100, 90, 1]) 
console.log(`
This should be 97!
The result is: ${a}!`
);

let b = largestSum([10, 100, 1000, 1001, 2002]) 
console.log(`
This should be 3003!
The result is: ${b}!`
);

let c = largestSum([1234, 100, 1000, 1001, 2002]) 
console.log(`
This should be 3236!
The result is: ${c}!`
);