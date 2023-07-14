import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'
import { OrderCard } from '../OrderCard'
import { CheckoutButton } from '../CheckoutButton'
import "./styles.css"

function CheckoutSideMenu () {

    const [orderCreated, setOrderCreated] = React.useState(false)

    const context = React.useContext(ShoppingCartContext)
    
    const navigate = useNavigate()

    const handleCheckout = () => {
        context.createNewOrder(context.cartItems, context.getTotalPriceCartItems)
        context.clearCart()
        context.closeCheckoutSideMenu()
        context.setInputValue('')
        setOrderCreated(true)
    }

    React.useEffect(() => {
        if (orderCreated) {
            navigate(`/my-order/${context.myOrder[context.myOrder.length - 1].id}`)
        }
    }, [orderCreated, context.myOrder])

    return (
        <>
            <aside 
                className='checkout-side-menu w-[300px] flex-col fixed top-[80px] px-1 right-0 border border-black rounded-lg'
                style={{ display: context.isCheckoutSideMenuOpen ? 'flex' : 'none' }}    
            >
                <div className='flex justify-between items-center py-6 px-4'>
                    <h2 className='text-xl font-medium'>My order</h2>
                    <XMarkIcon 
                        className='h-6 w-6 fill-blue cursor-pointer'
                        onClick={context.closeCheckoutSideMenu}
                     />
                </div>
                <div>
                    <p className='flex gap-2 text-lg mb-4 ml-5'>
                        <span className='font-medium'>Total:</span>
                        <span className='font-bold'>${context.getTotalPriceCartItems(context.cartItems)}</span>
                    </p>
                </div>
                <div className='flex flex-col gap-3 p-1'>
                    {context.cartItems.map(item => (
                        <OrderCard
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            imageUrl={item.images[0]}
                            price={item.price}
                            removeFromCart={context.removeFromCart}
                        />
                    ))}
                </div>
                <div className='my-2 w-full'>
                    <CheckoutButton
                        onClick={handleCheckout}
                    />
                </div>
                
            </aside>
        </>
    )
}

export { CheckoutSideMenu }