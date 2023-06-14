function sumAll(a){
  let result = 0
  for(let i = 0; i < a.length; i++){
    result += a[i]
  }
  return result
}

console.log(sumAll([10, 2, 4]))