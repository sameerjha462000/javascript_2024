export function live(name) {
    console.log(`Let ${name} live.`)
}

export function sleep(name) {
    console.log(`Hi, My name is ${name} and I am going to sleep.`)
}

export class Person {
    constructor(name, timePeriod) {
        this.name = name
        this.timePeriod = timePeriod
    }

    future() {
        const { name, timePeriod } = this;
        console.log(`The name of this human is ${name} and he will live for ${timePeriod} years.`)
    }
}