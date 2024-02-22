let name = 'Abhishek'

console.log(name)

const age = 23 // If we try to reference the age variable before this line, then we would get a reference error as lines[1, 4] is TDZ for age.

console.log(age)

/*
    The above code is equivalent to:
    let name = <UNITIALIZED>
    const age = <UNITIALIZED>
    name = 'Abhishek'
    console.log(name)
    age = 23
    console.log(age)
*/


{
    console.log(passion) //  we are using passion in its TDZ.

    // since let and const are block scoped, this means that they are restricted to the block in which they are defined.
    // In this case the scope of this 'passion' variable is from line no 20 to 26 and the lines from 20 to 24 are TDZ for this 
    // variable.
    let passion = 'mathematics'

    console.log(passion)
}

