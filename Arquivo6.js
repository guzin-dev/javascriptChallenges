function repeatValue(element, repeat){
  let a = []
  for(let i = 0; i < repeat; i++){
    a.push(element)
  }
  return a
}

console.log(repeatValue(4, 3))