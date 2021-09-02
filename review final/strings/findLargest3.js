
// findLargestThreeDigitNum
// Write a function findLargestThreeDigitNum that, given a string of digits between 1 and 9, will return the largest three-digit number from the given string.
function getLargestThreeDigitNum(str) {
    if(!str) return;
  
    let result = [];
    let arr = str.split("");
  
    for(let i = 0; i < arr.length; i++) {
      let element = Number(arr[i]);
      result.push(element);
    }
  
    result = result.sort((a,b) => b-a);
    let final = result.slice(0,3); 
    return Number(final.join(""));
  
  }
  var largestNum = getLargestThreeDigitNum('124324122398999');
  // var largestNum = getLargestThreeDigitNum('231998132');
  console.log(largestNum); // 998
  console.log(typeof largestNum); // 'number'