// This is the way we implemented module pattern before ES6
const shoppingCart = (function (){
    const shippingCost = 10;
    const cart = []

    // Remember that exports need to be in the top level code.
    const addToCart = function (product, quantity) {
        cart.push({ product, quantity })
        console.log(`${quantity} ${product} added to cart`)
    }


    const totalPrice = 237;
    const totalQuantity = 23; 

    // The things returned are public API
    return {
        addToCart,
        cart,
        totalPrice,
        totalQuantity
    }
})();


shoppingCart.addToCart('pizza', 2)
shoppingCart.addToCart('bread', 2)
shoppingCart.addToCart('apples', 4)

console.log(shoppingCart.cart)