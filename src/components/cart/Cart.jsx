import React, { useContext,useEffect} from 'react'
import { CartContext } from '../../context/CartContext'

export const Cart = ({item,padding,removeLastDivider,index}) => {
    const {cart,removeFromCart } = useContext(CartContext);
    const cartLength = cart.length;
    const handleRemoveCart = (id) => {
        removeFromCart(id);
    }
    useEffect(() => {
        localStorage.setItem('productData', JSON.stringify(cart));  
    },[cart])
  return (
    <>
        <div className={`each-cart-item ${padding}`}>
            <div className='d-flex justify-content-between align-items-start'>
            <div className='me-2'>
                <img src={item.images[0]} style={{width: '100px', height: 'auto'}}/>
            </div>
            <div className='d-flex flex-column flex-fill align-items-start pe-4 ps-3'>
                <div><h6>{item.title}</h6></div>
                <div className='text-secondary p-1'>Qty {item.quantity}</div>
            </div>
            <div className='d-flex flex-column justify-content-end align-items-between'>
                <div className='text-end mb-2'><div className='btn btn-outline-success p-1'>{item.price}</div></div>
                <div onClick={() => handleRemoveCart(item.id)}><strong className='text-primary' style={{cursor: 'pointer'}}>Remove</strong></div>
            </div>
            </div>
        </div>
        {
            removeLastDivider ? ( cartLength === index+1 ? null : <div className='divider my-3'></div>) : <div className='divider my-3'></div>  
        }
    </>
  )
}
