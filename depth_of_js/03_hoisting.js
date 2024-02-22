/**
    hoisting is the process by which variables are magically lifted to the top of their scope.

    Remember, in JS:
        -- var is function scoped.
        -- let and const are block scoped.
        -- function definitions are block scoped in strict mode and function scoped in sloppy mode.

    Well actually this is not what happens, the code is first skimmed thru and during this phase their
    values are set to some value.

    In case of var variable declarations, this 'some value' is undefined and in case of let and const
    this is equal to <UNITIALIZED VALUE>.

    We would not be able to access the let and const variables until the line of their initialization 
    during code execution phase. This zone where we cannot use a let and a const variable is called 
    temporal dead zone (TDZ) in JS.
*/


// normal code
var n = 10
console.log(n)

// hoisting explained
console.log(name) // undefined
var name = 'Ibrahim'

/*
    The above code is similar to:
        var n = undefined
        var name = undefined
        n = 10
        console.log(n)
        console.log(name)
        name = 'Ibrahim'
*/