function multiply(num1, num2) {
  let handleInitVal = num1;
  for (let i = 1; i < num2; i++) {
    num1 += handleInitVal;
  }
  return num1;
}

console.log(multiply(2, 4));