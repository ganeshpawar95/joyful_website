import Product1 from '@/assets/images/products/p1.jpg'
import Product2 from '@/assets/images/products/p2.jpg'
import SingleProductCard from './SingleProductCard';
import { Button } from '@/components/ui/button';


const Products = [
    {
        title: 'Personalized Anniversary Keepsake Box',
        image: Product1,
        price: 1599.00,
        offerPrice: 1299.00,
    },
    {
        title: 'Timeless Memories Photo Frame Set',
        image: Product2,
        price: 899.00,
        offerPrice: 699.00,
    },
    {
        title: 'Name a star PDF',
        image: Product2,
        price: 500.00,
        offerPrice: 800.00,
    },
    {
        title: 'Personalised Birthday Frame',
        image: Product2,
        price: 800.00,
        offerPrice: 599.00,
    }
]


function ProductListing(props: any) {
    const { title } = props;
    return (
        <div>
            <div className='text-center'>
                <h3 className='text-3xl font-semibold'>{title}</h3>
            </div>
            <div className='grid sm:grid-cols-4 gap-5 mt-5'>
                {Products.map((product, index) => (
                    <SingleProductCard key={index} product={product} />
                ))}
            </div>
            <div className='text-center mt-6'>
                <Button>Show More</Button>
            </div>
        </div>
    )
}

export default ProductListing