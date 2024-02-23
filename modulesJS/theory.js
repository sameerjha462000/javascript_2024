/*
    1. A module is a standalone file, but it does not have to be.
    2. ES6 Modules are stored in files, exactly one module per file.
    3. Diff between ES6 Modules and scripts
        -- In modules, all top level variables are scoped to module whereas in 
            script all the top level variables are scoped to global.
        -- Default mode in modules is strict mode whereas in scripts the default
            mode is "sloppy" mode.
        -- In modules, the top-level this is undefined whereas in scripts the top
            level this refers to the window object.
    4. All imports are hoisted.
    5. All imports must be top-level code i.e. it should not be inside some block of code.
*/