import React from 'react'
import "./styles.css"
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'

function ProductDetail () {

    const context = React.useContext(ShoppingCartContext)

    return (
        <>
            <aside 
                className='product-detail w-[300px] flex-col fixed top-[80px] px-3 right-0 border border-black rounded-lg'
                style={{ display: context.isProductDetailOpen ? 'flex' : 'none' }}    
            >
                <div className='flex justify-between items-center p-6'>
                    <h2 className='text-xl font-medium'>Details</h2>
                    <XMarkIcon 
                        className='h-6 w-6 fill-blue cursor-pointer'
                        onClick={context.closeProductDetail}
                     />
                </div>
                <figure>
                    <img className='w-full h-full object-cover rounded-lg max-h-[300px]' src={context?.productToShow.images?.[0]} alt={context?.productToShow.title} />
                    <p className='flex flex-col mt-2'>
                        <span className='font-bold text-lg text-center mb-2'>{context.productToShow.title}</span>
                        <span className='text-justify'>{context.productToShow.description}</span>
                        <span className='text-right font-bold text-xl'>{context.productToShow.price}</span>
                    </p>
                </figure>
            </aside>
        </>
    )
}

export { ProductDetail }