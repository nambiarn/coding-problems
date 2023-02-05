 import { isAnagram, stringSplit, isAnagramWithSplit, 
  duplicateEncoder, countCharacters, fizzBuzz } from "./strings";
 import { findMax } from './maxminNumber'
 import { bubbleSort, swap, reverseString } from './sort'
 import { factorial } from './recursion'
 import { isStringIncluded, doSomeElementsMatch, doesEveryElementMatch, flattenArray, flattenArrayDeep } from './arrayMethods'

 describe('coding problem tests', () => {

  test('is anagram', () => {
    expect(isAnagram('elbow', 'below')).toBeTruthy();
    expect(isAnagram('ellbow', 'below')).toBeFalsy();
  });

  test('is string split', () => {
    expect(stringSplit('elbow')).toStrictEqual(['e', 'l', 'b', 'o', 'w']);
    expect(stringSplit('elbow t')).toStrictEqual(['e', 'l', 'b', 'o', 'w', ' ', 't'])
    expect(stringSplit('')).toBeFalsy();
    expect(stringSplit(32323)).toBeFalsy()
  });

  test('is Anagram with Split', () => {
    expect(isAnagramWithSplit('elbow', 'below')).toBeTruthy();
    expect(isAnagramWithSplit('eLbow', 'Below')).toBeTruthy();
    expect(isAnagramWithSplit('ellbow', 'below')).toBeFalsy();
    expect(isAnagramWithSplit('Motherin Law', 'Hitler Woman')).toBeTruthy();

  });

  test('whether find max works', () => {
    expect(findMax([32, 5,4,2 ])).toBe(32);
    expect(findMax([])).toStrictEqual([]);
    expect(findMax(null)).toStrictEqual([]);
  })

  test('whether sort works as expected', () => {
    expect(bubbleSort([32, 5,4,2])).toStrictEqual([2,4,5,32]);
    expect(bubbleSort([])).toStrictEqual([]);
    expect(bubbleSort(null)).toStrictEqual([]);
  })

  test('whether swap works as expected', () => {
    expect(swap(1,2)).toStrictEqual({ first: 2, second: 1 })
  })

   test('whether reverse string', () => {
     [
       { string: 'nikhil', expectedResult: 'lihkin' },
       { string: 'formula1', expectedResult: '1alumrof' },
       { string: '', expectedResult: '' },
       { string: null, expectedResult: '' }].
       forEach(test => {
         expect(reverseString(test.string)).toBe(test.expectedResult)
       })
   })
  
   test('whether factorial recursion works', () => {
     [
       { number: 5, expectedResult: 120 },
       { number: 0, expectedResult: 0 },
       { number: 1, expectedResult: 1 },
       { number: -1, expectedResult: 'Missing or negative number' },
       { number: -5, expectedResult: 'Missing or negative number' },
       { number: null, expectedResult: 'Missing or negative number' },
       { number: undefined, expectedResult: 'Missing or negative number' }
      ].forEach(
         test => {
           expect(factorial(test.number)).toBe(test.expectedResult)
         }
       )
   })

   test('whether count characters returns counts of characters in a string', () => {
     [
       { param: 'malayalam', expectedResult: { m: 2, a: 4, l: 2, y: 1 } },
       { param: 'fried rice', expectedResult: { f: 1, r: 2, i: 2, e: 2, d: 1, c: 1, ' ': 1 } },
       { param: null, expectedResult: 'Please enter string' },
       { param: undefined, expectedResult: 'Please enter string' },
       { param: 2, expectedResult: 'Please enter string' },
       { param: ['malayalam'], expectedResult: 'Please enter string' },
     ]
       .forEach(test => {

         expect(countCharacters(test.param)).toStrictEqual(test.expectedResult)

       })
   })

   test('whether string is included in a list', () => {
    [
      { param1: ['malayalam'], param2: 'malaYalam', expectedResult: true },
      { param1: ['malayalam', 'mallu'], param2: 'malaYalam', expectedResult: true },
      { param1: ['malayalam', 'mallu'], param2: 'malaY alam', expectedResult: false },
      { param1: null, param2: 'malaY alam', expectedResult:  "Please enter list in first parameter" },
      { param1: ['malayalam', 'mallu'], param2: null, expectedResult:  "Please enter string in second parameter" }
    ]
      .forEach(test => {

        expect(isStringIncluded(test.param1, test.param2)).toStrictEqual(test.expectedResult)

      })
  })

  test('whether some elements match in a list', () => {
    [
      { param1: [1,2,5], param2: el => el % 2 === 0, expectedResult: true },
      { param1: [1,3,5], param2: el => el % 2 === 0, expectedResult: false },
      { param1: [1, 3, 5, 12], param2: el => el % 2 === 0, expectedResult: true },
    ]
      .forEach(test => {

        expect(doSomeElementsMatch(test.param1, test.param2)).toStrictEqual(test.expectedResult)

      })
  })

  test('whether string is included in a list', () => {
    [
      { param1: [1,2,5], param2: el => el % 2 === 0, expectedResult: false },
      { param1: [1,3,5], param2: el => el % 2 === 0, expectedResult: false },
      { param1: [2, 4, 12], param2: el => el % 2 === 0, expectedResult: true },
    ]
      .forEach(test => {
        expect(doesEveryElementMatch(test.param1, test.param2)).toStrictEqual(test.expectedResult)

      })
  })

  test('whether string is included in a list', () => {
    [
      { param1: 15, expectedResult: [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'Fizz Buzz'] },
      { param1: 5, expectedResult: [1, 2, 'Fizz', 4, 'Buzz'] },
      { param1: 9, expectedResult: [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz'] },
    ]
      .forEach(test => {
        expect(fizzBuzz(test.param1)).toStrictEqual(test.expectedResult)
      })
  })

   test('whether flatten array flattens one level deep', () => {
     [{ param1: [11, 22, [33, 44]], expectedResult: [11, 22, 33, 44] }].forEach(test => {

       expect(flattenArray(test.param1)).toStrictEqual(test.expectedResult);

     }
     )
   })

   test('whether flatten array deep flattens n level deep recursively', () => {
     [{ param1: [11, 22, [33, 44]], expectedResult: [11, 22, 33, 44] },
     { param1: [11, 22, [33, [44]]], expectedResult: [11, 22, 33, 44] },
     { param1: [11, 22, [33, 44, [55, 66, [77, [88, [99]]]]]], expectedResult: [11, 22, 33, 44, 55, 66, 77, 88, 99] }]
       .forEach(test => {

         expect(flattenArrayDeep(test.param1)).toStrictEqual(test.expectedResult);

       }
       )
   })

 })