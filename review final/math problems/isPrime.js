// isPrime
// Write a function isPrime that, given a number num, returns true if the number is a prime number; otherwise returns false. A prime number is a number that is greater than 1 and is only divisible by itself and the number 1.
function isPrime(num) {
    if(num === 2) return true;
    
    for(let i = 2; i < num; i++) {
      if(num % i === 0) return false;
    }
    return true;
  }
  // isPrime(99); //false
  // isPrime(89); //true
  // isPrime(10); //false
  // isPrime(11)//true all prime nums 2, 3, 5, 7, and 11