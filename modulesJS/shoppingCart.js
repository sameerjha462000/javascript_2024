console.log('Exporting module')

const shippingCost = 10;
export const cart = []

// Remember that exports need to be in the top level code.
export const addToCart = function (product, quantity) {
    cart.push({ product, quantity })
    console.log(`${quantity} ${product} added to cart`)
}


const totalPrice = 237;
const totalQuantity = 23; 

export default function (product, quantity) {
    cart.push({ product, quantity })
    console.log(`${quantity} ${product} added to cart`)
}


// The exported items are also called PUBLIC API
// A module exports PUBLIC API. Everything other than PUBLIC api remains private
export { totalPrice, totalQuantity as tq }

