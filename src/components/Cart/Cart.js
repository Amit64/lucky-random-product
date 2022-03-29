import React, { useState } from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    // console.log(cart.length);
    const [freeItem,setFreeItem] = useState([]);
    
    const handleRandomCart =()=>{
        const randomProduct = Math.floor(Math.random() * cart.length);
        console.log(randomProduct);
    }

    return (
        <div className='cart'>
            <h4>order summery</h4>
            {
                cart.map(product => <div className='addToCart' key={product.id}>
                    <img src={product.img} alt="" />
                    <p>{product.name}</p>
                </div>)
            }

            <div className='cartBtnContainer'>
            <button onClick={()=>handleRandomCart(cart)} className='cartBtn'>Choose 1 for me</button>
            <button  className='cartBtn'>Remove All</button>
            </div>
        </div>
    );
};

export default Cart;