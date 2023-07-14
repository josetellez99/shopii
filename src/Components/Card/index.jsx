import React from 'react';
import { ShoppingCartContext } from '../../Context';
import { PlusIcon } from '@heroicons/react/24/solid';
import { CheckIcon } from '@heroicons/react/24/solid';



function Card ({product}) {

    const context = React.useContext(ShoppingCartContext)
    const [ isProductAdded, setIsProductAdded ] = React.useState(false)

    
    const showProductDetail = () => {
        context.openProductDetail();
        context.setProductToShow(product);
    }
    
    React.useEffect(() => {
        if(context.cartItems) {
            setIsProductAdded(context.cartItems.find(item => item.id === product.id));
        }
    }, [context.cartItems, product.id])

    const handlePlusClick = (event, product) => {
        event.stopPropagation();
        context.addToCart(product);
        setIsProductAdded(true);
        context.openCheckoutSideMenu()
    }

    const handleCheckClick = (event) => {
        event.stopPropagation();
        context.removeFromCart(product.id);
        setIsProductAdded(false);
    }
    

    const RenderIncon = () => (
        isProductAdded ? (
            <CheckIcon 
                className='h-4 w-4'
                onClick={(event) => handleCheckClick(event)}    
            />  
        ) : (
            <PlusIcon
                className='h-4 w-4'
                onClick={(event) => handlePlusClick(event, product)}
            />
        )
    )

    return (
    <div 
        className="bg-white cursor-pointer w-56 h-60 rounded-lg"
        onClick={() => showProductDetail(product)}
    >
            <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute bg-white/60 bottom-0 left-0 rounded-lg text-black text-sm m-2 px-3 py-0.5">{product.category.name}</span>
                <img className="w-full h-full object-cover rounded-lg" src={product.images[0]} alt="Un headpfone" />
                <div 
                    className={`${isProductAdded ? 'bg-green-500' : ''} absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1 font-bold`}
                >
                    <RenderIncon />              
                </div>
            </figure>
            <p className="flex justify-between">
                <span className="text-sm font-light">{product.title}</span>
                <span className="text-lg font-bold">{product.price}</span>
            </p>
        </div>
    )
}

export { Card };