/**
 * We can also add methods to objects
 */

const math = {
  add: function (...nums) {
    return nums.reduce((sum, currValue) => sum + currValue);
  },
  multiply: function (...nums) {
    return nums.reduce((pro, currValue) => pro * currValue);
  },
  min: function (...nums) {
    return nums.reduce((min, currValue) => Math.min(currValue, min));
  },
  max: function (...nums) {
    return nums.reduce((max, currValue) => Math.max(max, currValue));
  },
};

console.log(math.max(11, 23, 31, 42, 55, 53, 64, 69, 67));
