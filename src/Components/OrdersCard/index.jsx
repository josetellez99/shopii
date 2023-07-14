import { Link } from 'react-router-dom'
import { ChevronRightIcon} from '@heroicons/react/24/solid'
import { XMarkIcon } from '@heroicons/react/24/solid'



function OrdersCard (props) {

    const { item } = props

    console.log(item)

    return (
        <>
            <Link 
              className=' flex justify-between px-4 py-1 w-[280px] flex gap-3 border border-black rounded-lg'
              to={`/my-order/${item.id}`}  
            >
              <div>
                <div className='flex flex-col'>
                  <h2>{item.date}</h2>
                  <p>{`Articles: ${item.products.length}`}</p>
                </div>
              </div>
              <div className='flex items-center '>
                <h3 className='font-bold'>{`$${item.totalPrice}`}</h3>
                  <ChevronRightIcon className='h-5 w-5 fill-blue' />
              </div>
            </Link>
        </>
    )
}

export { OrdersCard }