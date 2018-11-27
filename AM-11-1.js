/*
You are given a m x n matrix (m rows, n columns).
Return all the elements in that matrix in a single array.
*/

let matrixToArray = (matrix) => {
  let result = [];
  for(let i = 0; i < matrix.length; i++){
    for(let j = 0; j < matrix[i].length; j++){
      result.push(matrix[i][j]);
    }
  }
  return result;
}

let a = matrixToArray([[1,2,3], [4,5,6], [7,8,9]]);
console.log(
`
It should look like: 1,2,3,4,5,6,7,8,9
Here's the result  : ${a}`
);

let b = matrixToArray([
  [4, 10, 2],
  [100, 6, 3]
]);

console.log(
  `
It should look like: 4,10,2,100,6,3
Here's the result  : ${b}`
)