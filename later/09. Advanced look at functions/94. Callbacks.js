// callbacks are functions which are passed as arguments to other functions

function callTwice(func){
    func();
    func();
}

function smile(){
    console.log("Please smile Abhishek");
}

// Here smile is a callback as it is been passed as an argument to another function 
callTwice(smile);

// EXAMPLE 2

// we can also pass function expressions in callbacks and they would work the same as we expected

function repeatNTimes(action, N){
    for(let i = 0; i < N; i++){
        action();
    }
}

const goToJim = function (){
    console.log("Abhishek!!, tum gym jao");
    console.log("Ok!!, simran");
}

repeatNTimes(goToJim, 3);





