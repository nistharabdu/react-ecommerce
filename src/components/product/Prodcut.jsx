import React, { useState } from 'react'
import styles from './product.module.css'

export const Prodcut = ({item,handleAddToCart}) => {
  return (
    <>
        <div className="card__ shadow-style p-3 d-flex flex-column h-100" >
            <div className={styles.cardHeart}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16" style={{display: 'none'}}>
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                </svg>
            </div>
            <div className='my-3'>
                <img className={`${styles.cardImage} custom-class`}  src={item.images[0]} alt="Card image cap" />
            </div>
            <div className='card__body p-3'>
                <h5 className="card__header mb-2">{item.title}</h5>
                <div className='card__price d-flex align-items-center justify-content-between my-4'>
                    <div className='btn btn-outline-success p-1'><strong>${item.price}</strong></div>
                    <div className="d-flex align-items-center justify-content-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FFD700" aria-hidden="true" className="w-5 h-5 pb-[1px] text-amber-400 me-1" style={{width: '1.2rem', height: '1.2rem'}}>
                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd"></path>
                        </svg>
                        <span className="text-sm">{item.rating}</span>
                    </div>
                </div>
                <div className="card__footer bg-transparent">
                    <button className="btn btn-primary" type="submit" onClick={() => handleAddToCart(item)}>Add to cart</button>
                </div>
            </div>
        </div> 
    </>
  )
}
