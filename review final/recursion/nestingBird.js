// nestingBird
// Write a function nestingBird that, given an array of characters and nested sub-arrays, concatenates the characters and returns the name of the bird in the nest.
function nestingBird(array) {
    let finalString = "";
  
    for(let i = 0; i < array.length; i++) {
      let element = array[i];
      
      if(Array.isArray(element)) {
        let result = nestingBird(element);
        finalString += result;
      } 
      else {
        finalString += element;
      }
    }
    return finalString;
  }
  // nestingBird(['r', 'o', ['b', ['i'], 'n']]); // => 'robin'
var testCase0 = nestingBird(['r', 'o', ['b', ['i'], 'n']]);
console.log('testCase0:', testCase0);
// 'robin'

var testCase1 = nestingBird(['c', ['a', ['r', ['d', ['i'], ['n', ['a', ['l']]]]]]]);
console.log('testCase1:', testCase1);
// 'cardinal'

var testCase2 = nestingBird([['K'], ['o', 'r', ['e', 'a', ['n', [' ', 'c'], 'r', ['o'], 'w'], '-'], 't'], 'i', 't']);
console.log('testCase2:', testCase2);
// 'Korean crow-tit'