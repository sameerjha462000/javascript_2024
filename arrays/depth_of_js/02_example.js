var n = 2;

function square(num) {
    return num * num
}

const square1 = square(n)
const square2 = square(4)

/*
    1. In the starting when the JS engine runs, the call stack is empty.
    2. Now the GEC starts is pushed inside the call stack.
        a. Now inside the GEC all the code is skimmed at first. This means that all the variable declarations are noted down and all the 
            function definitions are noted down. This is the memory creation phase.
            {
                n : undefined,
                square : function {[native code]},
                square1 : undefined,
                square2 : undefined
            }
        b. Now comes the code execution phase of the GEC.
            -- n would be assigned the value of 2
            -- when it reaches line no 7, square() is called. This would now start an execution context for the square function and all the
                code which was to be executed inside the GEC would be blocked for now.
            -- Now the execution context of square() is pushed into the stack. This would again go through 2 phases:
                --- memory creation phase
                    ---- In this phase, the value of num would be initially set to undefined
                        {
                            num : undefined
                        }
                --- code execution phase
                    ---- In this phase, the value of num would be set to the value of n which is 2 and then 2 * 2 would be returned.
        c. After the code execution phase of square function gets over, it is loaded off the call stack and the value returned is now stored in 
            the variable square1.
        
        d. After this, we reach to line no 8 and then again a seperate execution context is created for the square(). After the completion
            of the code execution phase of the square() function, the value returned is stored inside the variable square2 and the FEC is loaded
            off the call stack. With this line, the GEC completes its code execution phase and now GEC is also off removed from the call stack.
            
*/