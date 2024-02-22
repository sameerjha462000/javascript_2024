const nums = [1, 2, 3, 4, 5];

// If we do not pass the initial value for accumulator, then it takes the 1st value of the array as accumulator and the currValue starts with 1st index of the array
const sum = nums.reduce((sum, currValue) => sum + currValue);

const pro = nums.reduce((pro, currValue) => pro * currValue);

const exaggeratedSum = nums.reduce((sum, currValue) => sum + currValue, 25);

// classify evens
const evens = nums.reduce((evens, num) => {
  if (num % 2 === 0) evens.push(num);
  return evens;
}, []); // working as nums.filter(num => num % 2 === 0)

const parityList = nums.reduce((parityList, num) => {
  parityList.push({ value: num, parity: num % 2 === 0 ? "even" : "odd" });
  return parityList;
}, []);