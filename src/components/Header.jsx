import { Link } from 'react-router-dom';
import heartIcon from '../assets/icons/heart-outline.svg';
import cartIcon from '../assets/icons/shopping-outline.svg';

export function Header() {
    return (
        <div className="header">
            <div className="logoIcon"><Link className='pageButton' to='/'>[Insert Logo Here]</Link></div>
            <div className="shoppingCategories">
                <Link className='pageButton allItems' to='/shop/all'>All</Link>
                <Link className='pageButton menItems' to='/shop/men'>Men</Link>
                <Link className='pageButton womenItems' to='/shop/women'>Women</Link>
            </div>
            <div className="accountOptions">
                <div className="favorite">
                    <img src={heartIcon} alt="favorite" className="shopIcon" />
                </div>
                <div className="shoppingCart">
                    <img src={cartIcon} alt="cart" className="shopIcon" />
                </div>
            </div>
        </div>
    )
}

