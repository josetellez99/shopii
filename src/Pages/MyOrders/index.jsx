import React from 'react'
import { MainLayout } from '../../Components/MainLayaout'
import { ShoppingCartContext } from '../../Context'
import { OrdersCard } from '../../Components/OrdersCard'

function MyOrders() {

  const context = React.useContext(ShoppingCartContext)

    return (
      <>
       <MainLayout>
        <h1>My orders</h1>
        <div className='flex items-center flex-col mt-6 gap-2 w-[360px]'>
          {context.myOrder.map(item => (
            <OrdersCard
              key={item.id}
              item={item}
            />
          ))}
        </div>
      </MainLayout>
      </>
    )
  }
  
  export { MyOrders }