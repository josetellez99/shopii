import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context'
import { OrderCard } from '../../Components/OrderCard'
import { MainLayout } from '../../Components/MainLayaout'

function MyOrder() {

  const context = React.useContext(ShoppingCartContext)

  const { id } = useParams()
  const idNumber = parseInt(id)

  const order = context.myOrder.find(order => order.id === idNumber)
  console.log(order)

    return (
      <>
       <MainLayout>
        <h1>My order</h1>

        <div className='flex flex-col gap-3 p-1'>

          <Link to='/my-orders/'>See in my orders</Link>

          { order.products.map(item => (
              <OrderCard
                key={item.id}
                id={item.id}
                title={item.title}
                imageUrl={item.images[0]}
                price={item.price}
              />
            ))}
            
        </div>

      </MainLayout>
      </>
    )
  }

  export { MyOrder }