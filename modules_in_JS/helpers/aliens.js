// we can also export classes as well.
export default class Person{
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    introduce() {
        const { name, age } = this
        console.log(`Hi, my name is ${name} and age is ${age}.`)
    }
    
}

export function secretWeapon() {
    console.log(`We have a secret strategy to kill all the humans on the face of planet earth.`)
}