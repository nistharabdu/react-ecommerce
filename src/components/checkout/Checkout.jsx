import React, {useContext} from 'react'
import { Cart } from '../cart/Cart';
import { CartContext } from '../../context/CartContext';
import { NavLink } from 'react-router-dom';
import { Checkoutform } from './Checkoutform';

export const Checkout = () => {
    const { cart } = useContext(CartContext);
    const total = cart.reduce((acc, item) => acc + item.price, 0);
  return (
    <>
        <div className='container'>
            <h1>Checkout</h1>
            <div className='mt-5'></div>
            <div className='row mt-5'>
                <div className='col-12 col-md-7 pe-5'>
                    <Checkoutform />
                </div>
                <div className='col-12 col-md-5 ps-5' style={{borderLeft: '1px solid rgba(229,231,235,1)'}}>
                    <h5 className='mb-5'>Order Summary</h5>
                    <div>
                        {
                            cart !== null ? cart.map((item,index) => {
                                return <Cart key={index} item={item} padding="py-3"/>
                            }) : <h3 className='text-center'>Your cart is empty</h3>
                        }
                    </div>
                    <div className='py-4 '>
                        <div className='row' style={{color: 'grey'}}>
                            <div className='col-auto flex-fill'>
                                Subtotal
                            </div>
                            <div className='col-auto'>
                                <strong>${total}</strong>
                            </div>
                        </div>
                        <div className='divider my-3'></div>
                        <div className='row' style={{color: 'grey'}}>
                            <div className='col-auto flex-fill'>
                                Shpping estimate
                            </div>
                            <div className='col-auto'>
                                <strong>${5}</strong>
                            </div>
                        </div>
                        <div className='divider my-3'></div>
                        <div className='row' style={{color: 'grey'}}>
                            <div className='col-auto flex-fill'>
                                Tax estimate
                            </div>
                            <div className='col-auto'>
                                <strong>${20}</strong>
                            </div>
                        </div>
                        <div className='divider my-3'></div>
                        <div className='row'>
                            <div className='col-auto flex-fill'>
                                <strong>Order total</strong>
                            </div>
                            <div className='col-auto'>
                                <strong>${total+5+20}</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
