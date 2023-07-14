import React from 'react'
import { useParams } from 'react-router-dom'
import { MainLayout } from '../../Components/MainLayaout'
import { Card } from '../../Components/Card'
import { ProductDetail } from '../../Components/ProductDetail'
import { ShoppingCartContext } from '../../Context'
import { InputSearcher } from '../../Components/InputSearcher'

function Home() {

  const context = React.useContext(ShoppingCartContext)

  const marginRightClass = context.isCheckoutSideMenuOpen || context.isProductDetailOpen ? 'mr-24' : '';

  const { category } = useParams()

  const productsToRender = () => {
      if(!category) {
        return context.filteredProducts
    } else {
      const productsByCategory = context.filteredProducts.filter(product => product.category.name === category)
        return productsByCategory
    } 
  }


  return (
    <>
      <MainLayout>
        <div>
          <h1 className="text-2xl mb-4 font-bold text-center">Products</h1>
        </div>

        <InputSearcher
          inputValue={context.inputValue}
          setInputValue={context.setInputValue}
        />

        <div className={`${marginRightClass} grid grid-cols-4 gap- w-full max-w-screen-lg`}>
          {productsToRender()?.map((product) => (
            <Card key={product.id} product={product} />
            ))}
        </div>
        <div className='flex justify-center'>
          {context.filteredProducts.length === 0 && <p>No results found</p>}
        </div>
        <ProductDetail />

      </MainLayout>
    </>
  )
}

export { Home }

