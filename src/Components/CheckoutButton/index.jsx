import React from 'react'

function CheckoutButton(props) {
    return (
        <button 
            className="bg-green-500 w-full text-white py-2 px-4 rounded hover:bg-green-600"
            onClick={props.onClick}
        >
            Checkout
        </button>
    )
}

export { CheckoutButton }