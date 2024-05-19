function getEvenNumbers(numbersArray) {
  return numbersArray.filter((item) => item % 2 === 0);
}
console.log(getEvenNumbers([1, 2, 3, 6, 8, 10]));
console.log(getEvenNumbers([1, 2]));
console.log(getEvenNumbers([12, 14, 15]));
console.log(getEvenNumbers([13, 15]));
console.log(getEvenNumbers([1, 3, 9]));
console.log(getEvenNumbers([10, 3, 9]));
