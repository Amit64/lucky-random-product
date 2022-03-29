import React, { useState } from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    // console.log(cart.length);
    const [freeItem,setFreeItem] = useState({});
    console.log(freeItem);
    
    const handleRandomCart =()=>{
        const randomProduct = Math.floor(Math.random() * cart.length);
        const item = cart[randomProduct]
        setFreeItem(item);
    }
    const removeAllCart = () =>{
        setFreeItem({});
        delete Object.keys(cart);
    }
    return (
        <div className='cart'>
            <h4>order summery</h4>
            {
                cart.map(product => <div className='addToCart' key={product.id}>
                    <img src={product.img} alt="" />
                    <p>{product.name}</p>
                    <p>${product.price}</p>
                </div>)
            }
            <p>.................</p>
            <div className='addToCart'>
                <img src={freeItem.img} alt="" />
                <p>{freeItem.name}</p>
            </div>

            <div className='cartBtnContainer'>
            <button onClick={()=>handleRandomCart(cart)} className='cartBtn'>Choose 1 for me</button>
            <button onClick={()=>removeAllCart(cart)}  className='cartBtn'>Remove All</button>
            </div>
        </div>
    );
};

export default Cart;