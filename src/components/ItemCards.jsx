import { useContext } from 'react';
import { cartContext } from '../context/Cart';


function AddToCartBtn({product}) {
    const { addToCart } = useContext(cartContext);

    const addProductToCart = () => {
        addToCart(product);
    }
    return (
        <button className='addToCartBtn defaultButtonStyles' onClick={addProductToCart}>Add To Cart</button>
    )
}

function ItemCards({products}) {
    const productItems = products.map((item) => {
        return (
            <div className='itemCard' key={item.id}>
                <div className="imageWrapper">
                    <img src={item.image} alt="" className="productImage" />
                </div>
                <div className="itemDescriptionWrapper">
                    <ul className="itemDescription">
                        <li className='itemTitle'>{item.title}</li>
                        <li className='itemCategory'>{item.category}</li>
                        <li className='itemPrice'>${item.price.toFixed(2)}</li>
                    </ul>
                    <AddToCartBtn product={item}/> 
                </div>
                
            </div>
        )
    })

    return (
        <>
            {productItems}
        </>
    )
}

export function ItemCardsGrid({products}) {
    return (
        <div className="shopSection contentContainer">
            <div className="shoppingItemsGrid">
                <ItemCards products={products} />
            </div>
        </div>
    )
}