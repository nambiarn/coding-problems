function narcissistic(value) {
  const valueStr = String(value)
  const exponential = String(value).length
  let result = 0;

  valueStr.split('').forEach((el, index) => {
    result += (Number(valueStr[index]) ** exponential)
})
  return result === value
}

function solution(str, ending){
  const endingLength = ending.split('').length
  const strLength = str.split('').length
    if (endingLength === strLength) return str.split('').join('') === ending.split('').join('') 
    
  const splicedString = str.split('').splice(strLength - endingLength - 1, strLength)
  return splicedString.join('').endsWith(ending)
}