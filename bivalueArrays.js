/* 
Determine the largest length that returns the largest bivalue array.
A bivalue array is an array made of only two values (i.e. [1,2,2,1] || [3,4,3,4,4,3])
*/

let largestBivalue = (array) => {
  let latest, secondLatest, result, count = 0;    //default: returns -1
  if(array.length < 1){
    return -1;
  } else {
    result = 0;
  }
  for (let i = 0; i < array.length; i++){   //loops through entire array
    if(typeof latest === 'undefined'){
      latest = array[i];
    } else if (typeof secondLatest === 'undefined'){
      secondLatest = array[i];
    } else if (array[i] !== latest){
      if(array[i] !== secondLatest){
        if(count > result){
          result = count;
        }
        count = 1
      }
      secondLatest = latest;
      latest = array[i];
    } 
    count++
  }
  if (count > result){
    result = count;
  }
  return result;                            //returns result
}