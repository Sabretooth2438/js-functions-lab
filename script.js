// //Checking
// console.log('Hello World!')

// //Example 1
// const maxOfTwoNumbers = (x, y) => {
//   if (x >= y) {
//     return x
//   } else {
//     return y
//   }
// }

// console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9))

// //Example 2
// const isAdult = (number) => {
//   if (number > 18) {
//     return 'Adult'
//   } else {
//     return 'Minor'
//   }
// }

// console.log('Exercise 2 Result:', isAdult(21))

// //Example 3
// const isCharAVowel = (char) => {
//   if (
//     char === 'a' ||
//     char === 'e' ||
//     char === 'i' ||
//     char === 'o' ||
//     char === 'u'
//   ) {
//     return true
//   } else {
//     return false
//   }
// }

// console.log('Exercise 3 Results:', isCharAVowel('a'))

// //Exercise 4
// const generateEmail = (name, domain) => {
//   return `${name}@${domain}`
// }

// console.log('Exercise 4 Result:', generateEmail('johnsmith', 'example.com'))

// //Exercise 5
// const greetuser = (name, tod) => {
//   switch (tod) {
//     case 'morning':
//       return `Good ${tod}, ${name}!`
//       break
//     case 'afternoon':
//       return `Good ${tod}, ${name}!`
//       break
//     case 'evening':
//       return `Good ${tod}, ${name}!`
//       break
//     default:
//       return 'Invalid Time of Day'
//   }
// }
// console.log('Exercise 5 results:', greetuser('Sam', 'morning'))

//Exercise 6
const maxOfThree = (num1, num2, num3) => {
  if (num1 > num2 && num1 > num3) {
    return num1
  } else if (num2 > num1 && num2 > num3) {
    return num2
  } else {
    return num3
  }
}

console.log('Exercise 6 Result:', maxOfThree(5, 10, 8))
