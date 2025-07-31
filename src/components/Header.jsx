import { Link, useLocation } from 'react-router-dom';
import cartIcon from '../assets/icons/shopping-outline.svg';
import { useState, useContext } from 'react';
import { cartContext } from '../context/Cart';

export function Header() {
    const {getTotalQuantity} = useContext(cartContext);
    const cartQuantity = getTotalQuantity();
    const location = useLocation();
    const [heartIconAnimation, setHeartIconAnimation] = useState(false);

    const heartIconClick = () => {
        setHeartIconAnimation(false);
        requestAnimationFrame(() => {
            setHeartIconAnimation(true);
        })
    }

    return (
        <div className="header">
            <div className="logoIcon"><Link className='pageButton fontStyle' to='/'>Fancy Island</Link></div>
            <div className="shoppingCategories">
                <Link className={'pageButton allItems' + ' ' + (location.pathname==='/shop/all' ? 'linkVisited' : '')} to='/shop/all'>All</Link>
                <Link className={'pageButton menItems' + ' ' + (location.pathname==='/shop/men' ? 'linkVisited' : '')} to='/shop/men'>Men</Link>
                <Link className={'pageButton womenItems' + ' ' + (location.pathname==='/shop/women' ? 'linkVisited' : '')} to='/shop/women'>Women</Link>
            </div>
            <div className="accountOptions">
                <div className="favorite">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" onClick={heartIconClick} className={"shopIcon heartIcon" + (heartIconAnimation ? ' heartIconAnimation' : '')}><path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" /></svg>
                    {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" onClick={heartIconClick} className={"shopIcon heartIcon" + heartIconAnimation ? ' heartIconAnimation' : ''}><path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" /></svg> */}
                </div>
                <div className="shoppingCart">
                    <Link className='myCartLink' to='/mycart'>
                        <img src={cartIcon} alt="cart" className="shopIcon" />
                    </Link>
                    {!!cartQuantity &&  <div className="cartQuantity">{cartQuantity}</div>}
                </div>
            </div>
        </div>
    )
}

