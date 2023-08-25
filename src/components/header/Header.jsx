import React, { useEffect, useState } from 'react'
import { AccountPopup } from '../account/AccountPopup'
import { CartPopup } from '../cart/CartPopup'
import './header.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { NavLink } from 'react-router-dom';

export const Header = ({setSearchValue}) => {
    const [headerToggleObj, setHeaderToggleObj] = useState({account:false,cart:false});
    const [searchInputValue, setSearchInputValue] = useState('');
    const [searchToogle,setSearchToogle] = useState(false);
    useEffect(() => {
        setSearchValue(searchInputValue);
    }, [searchInputValue]);

    const { cart } = useContext(CartContext);
      
    return (
    <header className='p-4 mb-5 shadow-style'>
        <div className='container'> 
            <div className='row align-items-start align-items-center'>
                <div className='col-md-6 d-flex justify-content-start'><NavLink to='/' style={{textDecoration:'none',color:'black'}}><h1>XShope</h1></NavLink></div>
                <div className='col-md-6 d-flex justify-content-end align-items-center'>
                    <div className='col-auto flex-fill each-header-item me-2'>
                        <div className='d-flex align-items-center w-100'>
                            <div className={`each-header-item__content each-header-item__content--search col-auto flex-fill me-2 ${searchToogle === true ? 'active' : ''}`}>
                                <form>
                                    <div className="form-group">
                                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Search" onKeyUp={(e) => setSearchInputValue(e.target.value)}/>
                                    </div>
                                </form> 
                            </div>
                            <div className="`col-auto" style={{cursor:'pointer'}} onClick={() => setSearchToogle(!searchToogle)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16" style={{height: '1.75rem',width: '1.75rem'}}>
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className={`col-auto me-2 each-header-item each-header-item--with-popup ${headerToggleObj.cart === true ? 'active' : ''}`}>
                        <div onClick={() => setHeaderToggleObj({account:false,cart:!headerToggleObj.cart})} className='position-relative'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" style={{height: '1.75rem',width: '1.75rem'}}>
                                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
                            </svg>
                            <span className='cart-number'>{cart.length}</span>
                        </div>
                        <div className='position-absolute each-header-item__content each-header-item__content--account sec-shadow p-4 mt-3 white_bg'>
                            <CartPopup setHeaderToggleObj={setHeaderToggleObj}/>
                        </div>
                    </div>
                    <div className={`col-auto each-header-item each-header-item--with-popup ${headerToggleObj.account === true ? 'active' : ''}`}>
                        <div onClick={() => setHeaderToggleObj({account:!headerToggleObj.account,cart:false})} >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" style={{height: '2rem',width: '2rem'}}>
                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
                            </svg>
                        </div>
                        <div className="position-absolute each-header-item__content each-header-item__content--cart sec-shadow p-4 mt-3 white_bg">
                            <AccountPopup setHeaderToggleObj={setHeaderToggleObj}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}
