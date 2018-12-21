////////////////////
//   MULTIPLIER   //
////////////////////

function multiplier(coefficient){
  return function(number){
    return coefficient * number;
  }
}

let double = multiplier(2);
let triple = multiplier(3);

console.log(double(4))
//should output: 8

console.log(triple(5))
//should output: 15

function execute(param, func){
  return func(param);
}

////////////////////
//    EXECUTE     //
////////////////////

execute(5, console.log);
//should log '5' to the console

function positive(x) {
  if(x > 0){
    return true;
  }
  return false
}
console.log(execute(20, positive));
// should return 'true'

console.log(execute(-5, positive))
// should return 'false'

////////////////////
// SWITCH CREATOR //
////////////////////

function switchCreator(){
  let lightsOn = false;
  return function(){
    lightsOn = !lightsOn;
    if(lightsOn){
      console.log("Lights On!");
    } else {
      console.log("Lights Off!");
    }
  }
}

let lightSwitch = switchCreator();
lightSwitch();
//should output: 'Lights On!'
lightSwitch();
//should output: 'Lights Off!'


////////////////////
//  MEMO CREATOR  //
////////////////////

function memoCreator(func){
  let memo = {};
  return function(x){
    if(memo[x]){
      return "" + memo[x] + ": from memory";
    } else {
      memo[x] = func(x); 
      return "" + memo[x] + ": calculated";
    }
  }
}

function addTwo(x){
  return x + 2;
}

let plusTwoCalc = memoCreator(addTwo);

console.log(plusTwoCalc(2))
//should log '4: calculated'

console.log(plusTwoCalc(2))
//should log '4: from memory'

console.log(plusTwoCalc(4))
//should log '6: calculated'


////////////////////
// CREATE A LOOP  //
////////////////////

function loop(initial, test, update, body){
  if(test(initial)){
    body(initial);
    loop(update(initial), test, update, body);
  }
}

loop(4, function(x) {return x > 0;}, function(x) { return x - 1;}, console.log)

let array = [];
loop(0, x => x < 5, x => x + 1, array.push.bind(array))
console.log(array)