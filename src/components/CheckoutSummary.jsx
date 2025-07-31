export function CheckoutSummary({products}) {
    const itemSubtotal = products.reduce((subtotal, currentItem) => subtotal + (parseFloat(currentItem.price) * parseInt(currentItem.quantity)), 0);
    const shippingFee = itemSubtotal < 50 && itemSubtotal > 0 ? 9.99 : 0.0;
    const estimatedTax = itemSubtotal * 0.085;
    const totalCost = itemSubtotal + shippingFee + estimatedTax;

    return (
        <div className="costSummary">
            <h2 className="costSummaryTitle">Summary</h2>
            <div className="myCartCostSummary">
                <div className="subtotalContainer myCartDescriptions">
                    <p className="subtotalLabel summaryLabel">Subtotal: </p>
                    <div className="subtotal">${itemSubtotal.toFixed(2)}</div>
                </div>
                <div className="shippingFeeContainer myCartDescriptions">
                    <p className="shippingFeeLabel summaryLabel">Shipping Fee: </p>
                    <div className="shippingFee">${shippingFee.toFixed(2)}</div>
                </div>
                <div className="taxContainer myCartDescriptions">
                    <p className="taxLabel summaryLabel">Estimated Tax: </p>
                    <div className="taxCollected">${estimatedTax.toFixed(2)}</div>
                </div>
                <div className="totalCostContainer myCartDescriptions">
                    <p className="totalCostLabel summaryLabel">Total Cost: </p>
                    <div className="totalCost">${totalCost.toFixed(2)}</div>
                </div>
            </div>
            <div className="checkoutBtnContainer">
                <button className="checkOutBtn defaultButtonStyles">Checkout</button>
            </div>
        </div>
    )

}