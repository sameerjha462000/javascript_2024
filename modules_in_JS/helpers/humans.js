// To make a function avaliable to be imported to other files, we use export keyword.

// Functions, classes, variables which do not have export before them cannot be imported in other files.

// exports are of 2 types : named exports and default exports.

// we can have multiple named exports in a file but only 1 default export inside a file.

// Also, we do not need to have a name for default export since it is unique per file.

export function eat(food) {
    console.log(`I am eating ${food}.`)
}

// This is default export, so we do not need to give it name. Default exports are unique and are imported without {}.
export default function(name) {
    console.log(`Hi, My name is ${name}.`)
}

// since this function does not have export before it, we cannot export this function.
function kill(name) {
    console.log(`I will kill ${name}.`)
}
