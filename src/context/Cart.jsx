import { useState, createContext } from 'react';

export const cartContext = createContext({
    cart: [],
    addToCart: () => {},
    removeFromCart: () => {},
    changeItemQuantity: () => {},
    getTotalQuantity: () => {}
});

function duplicateCart(cart) {
    return JSON.parse(JSON.stringify(cart));;
}

export function CartContextProvider({children}) {
    const [cart, setCart] = useState([]);
    
    const addToCart = (newItem) => {
        let updatedCart = duplicateCart(cart);

        for (let item of updatedCart) {
            if (newItem.id == item.id) {
                item.quantity++;
                setCart(updatedCart);
                return;
            }
        }

        updatedCart.push({
            ...newItem,
            quantity: 1
        });
        setCart(updatedCart);
    };

    const removeFromCart = (itemID) => {
        let updatedCart = duplicateCart(cart);
        setCart(updatedCart.filter((item) => item.id != itemID));
    };

    const changeItemQuantity = (itemID, newQuantity) => {
        let updatedCart = duplicateCart(cart);
        for (let item of updatedCart) {
            if (item.id == itemID) {
                item.quantity = newQuantity;
                setCart(updatedCart);
                return;
            }
        }

        throw new Error(`The Cart Context does not contain the following itemID: ${itemID}`);
    };

    const getTotalQuantity = () => {
        let count = 0;
        // console.log(cart);
        for (const item of cart) {
            count += item.quantity;
        }
        return count;
    };

    return (
        <cartContext.Provider value = {{cart, addToCart, removeFromCart, changeItemQuantity, getTotalQuantity}}>
            {children}
        </cartContext.Provider>
    )
}