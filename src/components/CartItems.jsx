import { useContext } from 'react';
import { cartContext } from '../context/Cart';

function useInputChange(itemID) {
    const { changeItemQuantity } = useContext(cartContext);

    const quantityOnChange = (e) => {
        changeItemQuantity(itemID, parseInt(e.target.value));
    }

    return quantityOnChange;
}

function useDeleteItem(itemID) {
    const { removeFromCart } = useContext(cartContext);
    const deleteItem = () => {
        removeFromCart(itemID);
    }

    return deleteItem;
}

function ItemQuantity({itemID, quantity}) {
    const quantityOnChange = useInputChange(itemID);
    const deleteItem = useDeleteItem(itemID)

    return (
        <div className="quantityContainer">
            <input type="number" className="itemQuantityInput" value={quantity} min='1' onChange={quantityOnChange}/>
            <p className='deleteItemBtn' onClick={deleteItem}>Delete</p>
        </div>
    )
}

export function CartItems({products}) {
    const productItems = products.map((item) => {
        return (
            <div className='shoppingCartItem' key={item.id}>
                <div className="imageWrapper">
                    <img src={item.image} alt="" className="productImage" />
                </div>
                <div className="itemDescriptionWrapper">
                    <ul className="itemDescription">
                        <li className='itemTitle'>{item.title}</li>
                        <li className='itemCategory'>{item.category}</li>
                        <li className='itemPrice'>${item.price.toFixed(2)}</li>
                    </ul>
                    <ItemQuantity itemID={item.id} quantity={item.quantity} />
                </div>
            </div>
        )
    })
    return (
        <div className="itemBag">
            <h2 className="shoppingCartTitle">Shopping Cart</h2>
            <div className="myCartItemList">
                {productItems}
            </div>
        </div>
    )
}