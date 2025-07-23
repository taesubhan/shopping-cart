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
                        <li className='itemPrice'>${item.price}</li>
                    </ul>
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
    console.log(products);
    return (
        <div className="shopSection">
            <div className="shoppingItemsGrid">
                <ItemCards products={products} />
            </div>
        </div>
    )
}