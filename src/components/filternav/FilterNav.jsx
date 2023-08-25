import React, { useEffect, useState } from 'react'
import { Pagination } from '../pagination/Pagination';
import './filterNav.css'
import axios from 'axios';

export const FilterNav = ({toggleFilterSec,data,setProducts,setPriceRange,priceRange,setCatgories,catgories,setSortOrder}) => {
    const [toggleObj,setToggleObj] = useState({price:false,color:false,size:false});
    const [categories,setCategories] = useState([]);
    const maxPrice = data.reduce((maxprice, data) => data.price > maxprice ? data.price : maxprice,0);

    useEffect(() => {
        axios.get('https://dummyjson.com/products/categories')
        .then(res => {
            setCategories(res.data);
        })
        .catch(err => {
          console.log('Here  categories query errro:',err);
        }); 
    },[]);

    return (
    <>
        <div className={`row gx-0 align-items-center filter-section mb-4 shadow-style p-3 ${toggleFilterSec === true ? '': 'd-none'}`}>
            <div className='col-auto'>
                <div className={`each-filter me-2 ${toggleObj.price === true ? 'active': ''}`}>
                    <div className='d-flex align-items-center btn btn-outline-primary'>
                        <div onClick={() => setToggleObj({price:!toggleObj.price,color:false,size:false})}>{0}$ - {priceRange.price}$</div>
                        <div className='ms-2' onClick={() => {
                            setToggleObj({...toggleObj,price:false})
                            setPriceRange({filterPriceRange:false,price:0})
                            }}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor" style={{width: '1rem', height: '1rem'}}>
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd">
                                </path>
                            </svg>
                        </div>
                    </div>
                    <div className='each-filter__content w-25 p-4 position-absolute white_bg sec-shadow mt-3'>
                        <div className='mb-2'><h6>Price range</h6></div>
                        <div>
                            <input type="range" className="form-range" min="1" max={2000} step="25" id="customRange3" onChange={(e) => setPriceRange({filterPriceRange:true,price:e.target.value})}/>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div>
                                    <div>Min price</div>
                                    <div>0</div>
                                </div>
                                <div>
                                    <div>Max price</div>
                                    <div>{priceRange.price}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-auto'>
                <div className={`each-filter me-2 ${toggleObj.color === true ? 'active': ''}`}>
                    <div className='d-flex align-items-center btn btn-outline-primary'>
                        <div onClick={() => setToggleObj({price:false,color:!toggleObj.color,size:false})}>Categories</div>
                        <div className='ms-2' onClick={ 
                            () => {
                                setToggleObj({...toggleObj,color:false});
                                setCatgories([]);
                            }
                        }>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor" style={{width: '1rem', height: '1rem'}}>
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd">
                                </path>
                            </svg>
                        </div>
                    </div>
                    <div className='each-filter__content w-25 p-4 position-absolute white_bg sec-shadow mt-3'>
                        <div className='mb-2'><h6>Categories</h6></div>
                        <div className='form-check d-flex' key={0}>
                            <input className="form-check-input me-2" type="radio" value="All" id="flexCheckDefault" onClick={() => setCatgories([])} name='category'/>
                            <label className="form-check-label" htmlFor="flexCheckDefault">All</label>
                        </div>
                        <div>
                            {categories.map((item,index) => {
                                return(
                                    <div className='form-check d-flex' key={index+1}>
                                        <input className="form-check-input me-2" type="radio" value={item} id="flexCheckDefault" onClick={() => setCatgories([item])} name='category'/>
                                        <label className="form-check-label" htmlFor="flexCheckDefault">{item}</label>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-auto' style={{display: 'none'}}>
                <div className={`each-filter me-2 ${toggleObj.size === true ? 'active': ''}`}>
                    <div className='d-flex align-items-center btn btn-outline-primary'>
                        <div onClick={() => setToggleObj({price:false,color:false,size:!toggleObj.size})}>Sizes</div>
                        <div className='ms-2' onClick={() => setToggleObj({...toggleObj,size:false})}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor" style={{width: '1rem', height: '1rem'}}>
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd">
                                </path>
                            </svg>
                        </div>
                    </div>
                    <div className='each-filter__content w-25 p-4 position-absolute white_bg sec-shadow mt-3'>
                        <div className='mb-2'><h6>Sizes</h6></div>
                            <div className='d-flex justify-content-center'>
                                <button className='btn btn-outline-primary m-1'>S</button>
                                <button className='btn btn-outline-primary m-1'>M</button>
                                <button className='btn btn-outline-primary m-1'>L</button>
                                <button className='btn btn-outline-primary m-1'>XL</button>
                            </div>
                    </div>
                </div>
            </div>
            <div className='col-auto flex-fill sort d-flex justify-content-end'>
                <div className='w-25'>
                    <select className='form-select p-2' 
                        onChange={(e) => setSortOrder(e.target.value === '' ? {rating:false,lowHighPrice:false} : e.target.value === 'lowHigh' ? {rating:false,lowHighPrice:true} : {rating:true,lowHighPrice:false})}
                    >
                        <option defaultValue>Sort Order</option>
                        <option value="rating">Best Rating</option>
                        <option value="lowHigh">Price Low - Hight</option>
                    </select>
                </div>
            </div>
        </div>
    </>
  )
}
