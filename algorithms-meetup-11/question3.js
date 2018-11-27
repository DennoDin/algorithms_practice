/*
MAGIC SQUARE!
Given an n x n matrix of numbers, return true if it's a magic square 
where all rows, diagonals, and columns sum to the same number.
*/

let magicSquareChecker = (matrix) => {
  let rowSums = [];                                     //row and columns need to have as many indices as the matrix length
  let columnSums = [];                                  //
  let diagonalSums = [0, 0];                            //initialize diagonals. there can only be two for a magic square

  for (let i = 0; i < matrix.length; i++){              //initialize row and column sums variables with 0s
    rowSums.push(0);                                    //
    columnSums.push(0);                                 //
  }

  ////////////////////////////
  // Iterate through square //
  ////////////////////////////

  for (let i = 0; i < matrix.length; i++){              //iterate through rows
    for (let j = 0; j < matrix.length; j++){            //iterate through columns
      let currentNum = matrix[i][j];                    //take the current number being read
      rowSums[i] = rowSums[i] + currentNum;             //add current number to a sum with the index of the row
      columnSums[j] = columnSums + currentNum;          //add current number to a sum with the index of the col
      if(i === j){                                      //if the i and j match, the current number is a diagonal
        diagonalSums[0] = diagonalSums[0] + currentNum; //add the current number to the first diagonal sum
      }
      if(i + j === matrix.length - 1){                  //if the sum of i and j are equal to the length-1, they're part of the other diagonal
        diagonalSums[1] = diagonalSums[1] + currentNum; //add the current number to the second diagonal sum
      }
    }
  }                                                     // !!MISSING!!
                                                        // > Create cache to check for duplicate numbers
                                                        // > Check for numbers outside N^2
                                                        // > Check for a continuous series of numbers

  //check that all sums match
  //return true or false depending on result
}