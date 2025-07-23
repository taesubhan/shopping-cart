import { useState, useEffect } from 'react';
import { Header } from '../components/Header.jsx';
import { Footer } from '../components/Footer.jsx';
import { ItemCardsGrid } from '../components/ItemCards';


function filterProductList(category, productList) {
    if (!category) return null;

    if (category == 'all') return productList.filter((product) => product.category.toLowerCase().includes('cloth'));

    return productList.filter((product) => product.category.toLowerCase() == category);
}

function ShopPage({category}) {
    const urlLink = 'https://fakestoreapi.com/products'

    const [products, setProducts] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(urlLink);
                if (!response.ok) {
                    throw new Error('fetch failed');
                }
                const productList = await response.json();
                
                const filteredProductList = filterProductList(category, productList);
                console.log(filteredProductList);
                setProducts(filteredProductList);
            } catch(err) {
                setError(err.message);
                setProducts(null);
            } finally {
                setLoading(false);
            }
        }

        fetchProducts();
    }, [category])

    return (
        <div className='shopPageContainer'>
            <Header />
            {error && <div className='errorPage'>{error} </div>}
            {loading && <div className='loadingPage'>Loading...</div>}
            {products && <ItemCardsGrid products={products} />}
            <Footer />
        </div>
    )
}

export {ShopPage};