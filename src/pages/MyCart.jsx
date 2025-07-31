import { useContext } from 'react';
import { cartContext } from '../context/Cart';
import { Header } from '../components/Header.jsx';
import { Footer } from '../components/Footer.jsx';
import { CartItems } from '../components/CartItems';
import { CheckoutSummary } from '../components/CheckoutSummary.jsx';


export function MyCart() {
    const { cart } = useContext(cartContext);
    
    return (
        <div className="MyCartContainer pageContainer">
            <Header />
            <div className="MyCartContents contentContainer">
                <CartItems products={cart} />
                <CheckoutSummary products={cart} />
            </div>
            <Footer />
        </div>
    )
}