// madLibs
// Write a function madLibs that, given a string and an array of words, replaces the asterisks in the string with a word from the words array.
function madLibs(str, array) {
    let finalString = "";
    let counter = 0;
  
    for(let i = 0; i < str.length; i++) {
      let char = str[i];
      
      if(char === "*") {
        finalString += array[counter];
        counter++;
        if(counter === array.length) counter=0;
      }
      else {
        finalString += char;
      }
    }
  return finalString;
  }


//   instructor way to solve it
function madLibs(str, array) {
     var finalSentence = '';
     //segments [ 'Marching is fun: ', ', ', ', ', ', ', '!' ]
      var segments = str.split('*');
      var nextWordIdx = 0;

      for (var i = 0; i < segments.length - 1; i++) {
    //adds element then word at array and then add them to the finalString
         var segment = segments[i];
        segment += array[nextWordIdx];
        finalSentence += segment;
        // increase the counter 
        nextWordIdx = nextWordIdx + 1 < array.length ? nextWordIdx + 1 : 0;
      }

      finalSentence += segments[segments.length - 1];
    
      return finalSentence;
    }

  // madLibs('My name is * and I am a *.', ['Sean', 'potato']);//'My name is Sean and I am a potato.'
  // If there are more words in the words array than there are asterisks in the sentence, that's ok! Just ignore the extra words.
  
  // madLibs('My name is * and I am a *.', ['Sean', 'potato', 'extra', 'words']); //'My name is Sean and I am a potato.'
  // If there are fewer words in the words array than there are asterisks in the sentence, start replacing asterisks with words from the front of the array again.
  
  // madLibs('Marching is fun: *, *, *, *!', ['left', 'right']);//'Marching is fun: left, right, left, right!'