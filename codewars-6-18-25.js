function openOrSenior(data){
  const result = []
  data.forEach(el => {
    if(el[0] > 54 && el[1] > 7) {
       result.push("Senior")
    } else {
      result.push("Open")
    }
  })
  
  return result
}