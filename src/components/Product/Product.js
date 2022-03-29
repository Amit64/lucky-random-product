import React from 'react';
import './Product.css'
const Product = ({handleAddToCart,product}) => {
 const {img,name,price} = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
            <p className='product-name'>Name:{name}</p>
            <p>Price : ${price}</p>
            </div>
            <button onClick={()=>handleAddToCart(product)} className='btn-cart'>
                <p>Add To Cart</p>
            </button>
        </div>
    );
};

export default Product;