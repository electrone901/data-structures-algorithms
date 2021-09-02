/*
Range is [1, 2, 3, 4, 5].
Even numbers in that range are 2 and 4.
The sum of 2 and 4 is 6.
*/
function sumEvensOnlyRecursive(startIdx, endIdx) {
    let sum = 0; 
    
    if(startIdx === endIdx) {
      
       if(startIdx % 2 === 0) {
         sum += startIdx;
         console.log("base", startIdx, sum);
         return sum;
       }
    }
    else {
      if(startIdx % 2 === 1) {
        console.log("odd", startIdx,sum)
        return sumEvensOnlyRecursive(startIdx+1, endIdx)
        
      } 
      else if(startIdx % 2 === 0){
        sum += startIdx
        return sum + sumEvensOnlyRecursive(startIdx+1, endIdx);
        // console.log("even", startIdx, "sum", sum)
        
      } 
    }
  }
  sumEvensOnlyRecursive(1, 5); // => 6