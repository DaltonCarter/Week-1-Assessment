//////////////////PROBLEM 1////////////////////
/* Create a copy of the faveColors array called 'colorCopy' using the slice method. */

const faveColors = ['red', 'green', 'black']

//CODE HERE

let colorCopy = faveColors.slice(0, 3)
console.log(colorCopy)
//////////////////PROBLEM 2////////////////////
/* Add a fourth color to the end of the 'colorCopy' array using the push method. */

//CODE HERE

colorCopy.push('Orange')
console.log(colorCopy)
//////////////////PROBLEM 3////////////////////
/*
  Using an array method, create a new array called 'middleNums' from the 
  numbers array that will capture only the middle numbers (2, 3, 4).
*/

const numbers = [1, 2, 3, 4, 5]

//CODE HERE

//Kyle used .slice instead here, so that the original array would not  be altered.


let middleNums = numbers.splice(1, 3)
console.log(middleNums)
//////////////////PROBLEM 4////////////////////
/* 
  Create an empty array called 'answers'.
  Using a for loop, loop over the array called 'bigOrSmallArray', and check to see if the 
  number in the array is GREATER than 100. 
  If it is, push 'big' as a string to the answers array. 
  If the number is LESS than or EQUAL to 100, push 'small' as a string 
  to the answers array. 
*/

//COMMENTARY: This one was a PERFECT example of making sure to read the ding dang instructions 3 times, I read it twice, and still almost had it run 3 branches,
//one for big, small, and equal. and then I read it the 3rd time and saw that the small entry INCLUDED equal. Read 3 times code once.

const bigOrSmallArray = [1, 99, 42, 69, 102, -10, 159, 352]

// CODE HERE

let answers = []

for(let i = 0; i < bigOrSmallArray.length; i++){
  if(bigOrSmallArray[i] <= 100){
    answers.push('Small')
  } else {
    answers.push('Big')
  }
  
}
console.log(answers)