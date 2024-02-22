/**
    Everything inside JS happens inside an execution context.

    But What is this execution context?

    Ans := Execution context is an abstract environment in which a JS code runs

    We have 2 types of execution contexts
        - Global Execution Context(GEC)
        - Functional Execution Context(FEC)

    We can have only 1 GEC per JS project. This is the code which is outside all the functions.

    A FEC is created when a function is executed i.e, when a function is called.

    Each of these execution contexts are pushed inside the call stack of the JS engine.(JS engine = call stack + heap memory)

    Now each execution context has 3 parts:
        - variable environment
            -- variable declarations
            -- functions definitions
            -- arguments object (This would NOT be present for arrow functions)
        - scope chain
        - this keyword (This would NOT be present for arrow functions)

    Each execution context has 2 phases:
        - memory creation phase
            -- In this phase, all the variable declarations and function definitions are noted.
            -- The variables which are declared using let and const are set to <UNITIALIZED> and are in the Temporal Dead Zone(TDZ) until
                the line they have been initialized which would be encountered during the code execution phase.
            -- The variables which are declared using var are set to undefined and would be set to their respective value during the 
                code execution phase.
            -- In case of functions, their whole function definition is stored.
        - code execution phase
            -- This is the part where JS engine starts running the code line by line in a synchronous manner. This is because JS is a single
                threaded language.
*/