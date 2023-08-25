import React, { useContext } from 'react'
import { Cart } from './Cart';
import { CartContext } from '../../context/CartContext';
import { NavLink } from 'react-router-dom';

export const CartPopup = ({setHeaderToggleObj}) => {
  const { cart } = useContext(CartContext);
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  return (
    <>
      <h3 className='mb-4'>Shopping cart</h3>
      {
        cart !== null ? cart.map((item,index) => {
          return <Cart key={index} item={item} padding="py-3" />
        }) : <h3 className='text-center'>Your cart is empty</h3>
      }
      <div className='py-4'>
        <div className='row'>
          <div className='col-auto flex-fill d-flex align-items-start'>
            <strong>Subtotal</strong>
          </div>
          <div className='col-auto'>
            <strong>${total}</strong>
          </div>
        </div>
        <div className='row mt-3'>
          <div className='col-12 col-md-6 text-center'>
            <div className=''>
              <NavLink to='/cart' onClick={() => setHeaderToggleObj({account:false,cart:false})}>
                <button type="button" className="btn btn-outline-primary w-100">View cart</button>
              </NavLink>
            </div>
          </div>
          <div className='col-auto col-md-6  text-center'>
            <div className=''>
              <NavLink to='/checkout' onClick={() => setHeaderToggleObj({account:false,cart:false})}>
                <button type="button" className="btn btn-primary w-100">Checkout</button>
              </NavLink>
            </div>
          </div>
        </div>
        <div style={{color: 'grey'}} className='mt-2'>Shipping and taxes calculated at checkout.</div>
      </div>
    </>
  )
}
