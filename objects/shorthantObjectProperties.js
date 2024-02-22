function giveMePeace(nums) {
  let max = nums.reduce((max, currValue) => Math.max(max, currValue));
  let min = nums.reduce((min, currValue) => Math.min(min, currValue));
  let sum = nums.reduce((sum, currValue) => sum + currValue);
  let pro = nums.reduce((pro, currValue) => pro * currValue);

  // When the name of the key and the value is same, then we can use shorthand notation
  return { min, max, sum, pro };
}

console.log(giveMePeace([1, 2, 3, 4, 5, 6]));
