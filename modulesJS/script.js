/*
    1. import statements are hoisted in modules.

    2. This means that even if write import statement at the 
        bottom of our module, it would still move to the top of the
        file i.e. module.

    3. We have 2 types of imports : default imports and named imports.

*/

import { addToCart, totalPrice as price, tq } from "./shoppingCart.js";

console.log('importing shoppingcart')

addToCart('bread', 5)
console.log(price, tq)


/**
    In pratice, we never mix named and default exports together.

    So the default style is to use either default export or named exports in a single line.
    import add, { addToCart, totalPrice, tq } from './shoppingCart.js' --> This is bad practice.
*/

/*
    imports create a live connection between the modules.
    imports are not a COPY of the exports. They are in fact a live connection to the export.
*/

addToCart('pizza', 2)
addToCart('bread', 5)
addToCart('apples', 4)

console.log(cart)
