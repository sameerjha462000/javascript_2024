/**
    The nullish coalescing operator ?? is the same as or operator ||.
    But the fact is that it considers only nullish values as false.

    It returns the first NON-nullish value or the last nullish.
*/

console.log(23 ?? 45) // 23 --> first NON-nullish value
console.log(23 ?? undefined) // 23 --> first NON-nullish value
console.log(null ?? 23) // 23 --> first NON-nullish value
console.log(null ?? undefined) // undefined --> last nullish value