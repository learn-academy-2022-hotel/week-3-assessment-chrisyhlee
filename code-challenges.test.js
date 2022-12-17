// ASSESSMENT 3: Coding Practical Questions with Jest

// const { describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

// PSEUDOCODE
// Use red-green refactor process to write test for the given prompt
// create fxn called fibFxn
// input: number
// output: array of input length filled with Fibonacci sequence
// initialize empty array. set first num to 0, second num to 1
// iterate through array using for loop with starting index 0 and stop index at < inputted number + 1
// each iteration adds the first and second num together and assigns the sum to next num, then reassigns first num to second num and second num to next num to create chain of adding the previous two numbers of whatever index you are on

const fibLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

const fibLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

describe ("fibFxn", () => {
  it ('takes a number greater than 2 and returns an array that length containing the numbers of the Fibonacci sequence', () => {
    expect (fibFxn(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
    expect (fibFxn(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
  })
})
// FAIL  ./code-challenges.test.js
// fibFxn
//   ✕ takes a number greater than 2 and returns an array that length containing the numbers of the Fibonacci sequence

// ● fibFxn › takes a number greater than 2 and returns an array that length containing the numbers of the Fibonacci sequence

//   ReferenceError: fibFxn is not defined

// b) Create the function that makes the test pass.

const fibFxn = (n) => {

  let fibArr = []
  let firstNum = 0
  let secondNum = 1

  for(var i=0; i<n+1; i++){
      fibArr.push(firstNum);
      let nextNum = firstNum+secondNum; 
      firstNum = secondNum; 
      secondNum = nextNum;
  }
  fibArr.shift()
  return fibArr
}
// console.log(fibFxn(9));
// PASS  ./code-challenges.test.js
// fibFxn
//   ✓ takes a number greater than 2 and returns an array that length containing the numbers of the Fibonacci sequence (1 ms)


// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// a) Create a test with expect statements for each of the variables provided.

// PSEUDOCODE
  // Use red-green refactor method to create test and see test fail first then pass after defining fxn
  // create fxn called objValue
  // input: object
  // output: value of object from least to greatest
  // use Object.values to first get the values of the object
  // use sort method to sort numbers in the array from least to greatest

const studyMinutesWeek1 = {
  sunday: 90,
  monday: 30,
  tuesday: 20,
  wednesday: 15,
  thursday: 30,
  friday: 15,
  saturday: 60
}
// Expected output: [15, 15, 20, 30, 30, 60, 90]

const studyMinutesWeek2 = {
  sunday: 100,
  monday: 10,
  tuesday: 45,
  wednesday: 60,
  thursday: 20,
  friday: 15,
  saturday: 65
}
// Expected output: [10, 15, 20, 45, 60, 65, 100]

describe ('objValue', () => {
  it ('takes in an object and outputs the value from least to greatest', () => {
    expect (objValue(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90])
    expect (objValue(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100])
  })
})
// FAIL  ./code-challenges.test.js
// objValue
//   ✕ takes in an object and outputs the value from least to greatest

// ● objValue › takes in an object and outputs the value from least to greatest

//   ReferenceError: objValue is not defined

// b) Create the function that makes the test pass.

const objValue = (obj) => {
  let valueArr = Object.values(obj)
  return valueArr.sort((a, b) => {
    return a - b
  })
}
// console.log(objValue(studyMinutesWeek1))
// PASS  ./code-challenges.test.js
// objValue
//   ✓ takes in an object and outputs the value from least to greatest


// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

// PSEUDOCODE
  // Use red green refactor to create test using describe, it and expect statements
  // create fxn called accountSum
  // input: array of numbers
  // output: array of the accumulating sum
  // iterate through array using map and add value of current index to the value of previous index

const accountTransactions1 = [100, -17, -23, -9]
// Expected output: [100, 83, 60, 51]

const accountTransactions2 = [250, -89, 100, -96]
// Expected output: [250, 161, 261, 165]

const accountTransactions3 = []
// Expected output: []

describe ('accountSum', () => {
  it ('takes an array of numbers and returns an array of the accumulating sum', () => {
    expect (accountSum(accountTransactions1)).toEqual([100, 83, 60, 51])
    expect (accountSum(accountTransactions2)).toEqual([250, 161, 261, 165])
    expect (accountSum(accountTransactions3)).toEqual([])
  })
})
// FAIL  ./code-challenges.test.js
// accountSum
//   ✕ takes an array of numbers and returns an array of the accumulating sum (1 ms)

// ● accountSum › takes an array of numbers and returns an array of the accumulating sum

//   ReferenceError: accountSum is not defined

// b) Create the function that makes the test pass.

const accountSum = (arr) => {
  let firstValue = arr[0]
  let newArr = []
  for (let i=0; i < arr.length; i++) {
    
    if (arr === []) {
      return arr
    } else if (i === 0) {
      newArr.push(firstValue)
    } else {
      newArr.push(arr[i] + newArr[i-1])
    }
  }
  return newArr
}
// console.log(accountSum(accountTransactions3));

// PASS  ./code-challenges.test.js
// accountSum
//   ✓ takes an array of numbers and returns an array of the accumulating sum