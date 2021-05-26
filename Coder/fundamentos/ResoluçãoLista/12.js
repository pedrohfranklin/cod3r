function fatorial(num) {
  if (num == 0) {
    return 1;
  } else {
    return num * fatorial(num - 1);
  }
}

console.log(fatorial(0));
console.log(fatorial(5));
console.log(fatorial(9));
console.log(fatorial(15));
