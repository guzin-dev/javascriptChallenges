function secondGreater(a){
  a.sort(function(a, b) {
    return b - a;
  });

  return a[1];
}

console.log(secondGreater([20, 123, 42, 2]))