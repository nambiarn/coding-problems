import { bubbleSort } from "./sort"
import { isStringIncluded } from "./arrayMethods";

export const isAnagram = (str1 , str2) => {
    return bubbleSort(str1.toLowerCase().split('')).join('') ===
    bubbleSort(str2.toLowerCase().split('')).join('');
}

export const stringSplit = (str, arr = []) => {
    if(!str || typeof(str) !== 'string') return ''
    for(let i = 0; i < str.length; i++) {
        arr.push(str[i])
   }
   return arr;
}

export const isAnagramWithSplit = (str1, str2) => {

    return bubbleSort(stringSplit(str1.toLowerCase())).join('') === 
           bubbleSort(stringSplit(str2.toLowerCase())).join('')
}

export const duplicateEncoder = str => {
    let list = str.split('');
    let listLength = list.length;
    let otherList = [];

    for(let i = 0; i < listLength - 1; i++ ) {
        let el = list[i];
        list.splice(list.indexOf(el), 1)
        if(isStringIncluded(list, el)) otherList.push(')')
        otherList.push('(')
    }

    return otherList.join('')
}

export const countCharacters = str => {
    if(!str || typeof(str) !== 'string') return 'Please enter string'

    let list = str.split('')
    let result = {};
 
     for(let i = 0; i < list.length; i++) {
         if(isStringIncluded(Object.keys(result), str[i])) {
             result[list[i]]++;
         } else {
             result[list[i]] = 1;
         }    
     }
 
     return result;
 }

 export const fizzBuzz = num => {
    let arr = [];
    for(let i = 1; i <= num; i++) {
        if(i % 5 === 0 && i % 3 === 0) {
            arr.push("Fizz Buzz");
            continue;
        }
        if(i % 5 === 0) { 
            arr.push("Buzz");
            continue;
        }
        if(i % 3 === 0) { 
            arr.push("Fizz"); 
            continue;
        }
        arr.push(i);
        }
        return arr;
}