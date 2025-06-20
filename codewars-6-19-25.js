function friend(friends){
  return friends.filter(friend => friend.length === 4)
}

/*
Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

Examples
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""
*/

function order(words){
  let positionForWord
  let result = []
  let wordsArr = words.split(' ') 
  wordsArr.forEach(word => {

    word.split('').forEach(letter => {

      if(Number.isInteger(Number(letter))) {
        positionForWord = letter;
        result[positionForWord - 1] = word
      }
    })
  }) 
  return result.join(' ')
}

/*
Complete the solution so that it splits the string into pairs of two characters. 
If the string contains an odd number of characters then it should 
replace the missing second character of the final pair with an underscore ('_').
*/
function solution(str) {
  const strArr = str.split('');
  let result = [];

  if (str.length % 2 === 0) {
    for (let i = 0; i < strArr.length; i += 2) {
      result.push(`${str[i]}${str[i + 1]}`);
    }
  } else {
    for (let i = 0; i < strArr.length; i += 2) {
      if (!str[i + 1]) {
        result.push(`${str[i]}_`);
      } else {
        result.push(`${str[i]}${str[i + 1]}`);
      }
    }
  }
}
/*
Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"

"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

"The_Stealth-Warrior" gets converted to "TheStealthWarrior"
*/

function toCamelCase(str){
  return str.split(/[-, _]/).map((el, index) => {
      if(index > 0) return `${el[0].toUpperCase()}${el.substr(1, el.length)}`
      else return el
  }).join('')
}