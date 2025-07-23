import { ShopPage } from './Shop';
import { useParams } from 'react-router-dom';


export function ShopPageWrapper() {
    const { category } = useParams();

    let categoryDetail;
    switch (category) {
        case 'men':
            categoryDetail = "men's clothing";
            break;
        case 'women':
            categoryDetail = "women's clothing";
            break;
        case 'all':
            categoryDetail = 'all';
            break;
        default:
            categoryDetail = 'all';
            break;
    }

    return (
        <ShopPage category={categoryDetail} />
    )
}