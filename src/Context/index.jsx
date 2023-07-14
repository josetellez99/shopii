import react from 'react'

const ShoppingCartContext = react.createContext()

function ShoppingCartProvider({ children }) {

    // State to determine whether the product detail modal is open or closed
    const [isProductDetailOpen, setIsProductDetailOpen] = react.useState(false)

    // Function to open the product detail modal
    const openProductDetail = () => {
        closeCheckoutSideMenu()
        setIsProductDetailOpen(true)
    }

    const closeProductDetail = () => setIsProductDetailOpen(false)

    // State to determine whether the product detail modal is open or closed
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = react.useState(false)

    // Function to open the product detail modal
    const openCheckoutSideMenu = () => {
        closeProductDetail()
        setIsCheckoutSideMenuOpen(true)
    }

    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)

    // State to store the product to show in the product detail
    const [productToShow, setProductToShow] = react.useState({})

    // State to store the items in the cart
    const [cartItems, setCartItems] = react.useState([])

    const removeFromCart = (id) => {
        const filteredProducts = cartItems.filter(product => product.id !== id)
        setCartItems(filteredProducts)
    }

    const addToCart = (product) => {
        setCartItems([...cartItems, product]);
    }

    const clearCart = () => setCartItems([])

    const getTotalPriceCartItems = (cartItems) => {
        const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0)
        return totalPrice
    } 

    // My order logic

    const [myOrder, setMyOrder] = react.useState([])

    const createNewOrder = (cartItems, getTotalPriceCartItems) => {
        const newOrder = {
            id: Math.floor(Math.random() * 1000),
            date: new Date().toLocaleDateString(),
            products: cartItems,
            totalPrice: getTotalPriceCartItems(cartItems),
        }
        setMyOrder([...myOrder, newOrder])
    }
    
    // Getting products from the API

    const [products, setProducts] = react.useState([])

    react.useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
            .then(response => response.json())
            .then(data => setProducts(data))
    }, [])

    // Filtering products by title

    const [inputValue, setInputValue] = react.useState('')
    const [filteredProducts, setFilteredProducts] = react.useState(products)

    react.useEffect(() => {
        const filteredProducts = products.filter((product) => {
            return product.title.toLowerCase().includes(inputValue.toLowerCase())
        })
        setFilteredProducts(filteredProducts)
    }, [inputValue, products])


    const categoriesSet = new Set(products.map(product => product.category.name));
    const categories = Array.from(categoriesSet);

    return (
        <ShoppingCartContext.Provider value={{ 
            isProductDetailOpen,
            openProductDetail,
            closeProductDetail,
            productToShow,
            setProductToShow,
            cartItems,
            setCartItems,
            isCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            removeFromCart,
            addToCart,
            clearCart,
            getTotalPriceCartItems,
            myOrder,
            setMyOrder,
            createNewOrder,
            products,
            setProducts,
            inputValue,
            setInputValue,
            filteredProducts,
            setFilteredProducts,
            categories,
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

export { ShoppingCartContext, ShoppingCartProvider }