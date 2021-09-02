function weather(ar){
    let avg = new Array(ar.length).fill(0);
    console.log(avg)
    let max = -Infinity;
    let idxToReturn = 0;
  
    for(let i = 0; i < ar.length; i++) {
      let sum = 0;
      let element = ar[i];
      for(let j = 0; j < element.length; j++) {
        sum += element[j];
        if(j === element.length-1) {
          // avg[i] = sum/element.length;
          let average = sum/element.length;
          
          if(average > max) {
            max = average;
            idxToReturn = i;
          }
          sum = 0;
        }
      }
    }
    // console.log(avg)
    // let max = avg[0];
    // let idxToReturn = 0;
    // for(let i = 1; i < avg.length; i++) {
    //   if(avg[i] > max) {
    //     max = avg[i];
    //     idxToReturn = i;
    //   }
    // }
    return idxToReturn;
  }
  // weather([[20,10],[40],[20,10,5]]);
  weather([[-20,-100],[-40, -45],[-20, -10,-5.1]])