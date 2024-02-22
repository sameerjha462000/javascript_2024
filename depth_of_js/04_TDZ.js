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