import React from 'react'
import './Cart.css'
import Button from '../Button/Button';

function Cart({cartItems, onAdd, onRemove}) {

    const totalPrice = cartItems.reduce((a, c) => a + c.price * c.quantity, 0); 

    return (<div className='cart__container'>
        {cartItems.length === 0 ? "No items in cart" : "" }
        <br /> <span className=''>Total price: ${totalPrice.toFixed(2)}</span>
        
         
        <Button title={`${ cartItems.length === 0 ? "Order !" : "Checkout" }`} 
                type={"checkout"}
                disable={cartItems.length === 0 ? true : false} />

    </div>)
}

export default Cart