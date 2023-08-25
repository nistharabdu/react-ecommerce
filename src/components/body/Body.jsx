import React, { useContext, useEffect, useState } from 'react'
import { Prodcut } from '../product/Prodcut';
import { FilterNav } from '../filternav/Filternav';
import { Pagination } from '../pagination/Pagination';
import axios from 'axios';
import { CartContext } from '../../context/CartContext';

export const Body = ({searchValue}) => {
    const [toggleFilterSec,setToggleFilterSec] = useState(false);
    const [products,setProducts] = useState([]);
    const [loading,setLoading] = useState(false);
    const [page,setPage] = useState(1);
    const [postsPerPage,setPostsPerPage] = useState(12);
    const startIndex =  (page-1) * postsPerPage;
    const endIndex = page * postsPerPage;
    const currentPosts = products.slice(startIndex,endIndex);

    const [priceRange,setPriceRange] = useState({filterPriceRange:false,price:0});
    const [catgories,setCatgories] = useState([]);
    const [sortOrder,setSortOrder] = useState({rating:false,lowHighPrice:false});


    const { cart,addToCart } = useContext(CartContext);
    const handleAddToCart = (item) => {
        addToCart(item);
    };
    useEffect(() => {
        localStorage.setItem('productData', JSON.stringify(cart));  
    },[cart])

    useEffect(() => {
        setLoading(true);
        let API_URL = '';
        if(catgories.length > 0){
            API_URL = `https://dummyjson.com/products/category/${catgories[0]}`;
        }
        else{
            if(searchValue !== ''){
                API_URL = `https://dummyjson.com/products/search?q=${searchValue}`;
            }
            else{
                API_URL = `https://dummyjson.com/products?limit=0`;
            }
        }
        axios.get(API_URL)
        .then(res => {
            if(sortOrder.rating){
                res.data.products.sort((a,b) => b.rating - a.rating);
            }
            if(sortOrder.lowHighPrice){
                res.data.products.sort((a,b) => a.price - b.price);
            }
            if(priceRange.filterPriceRange){
                res.data.products = res.data.products.filter(product => product.price <= priceRange.price);
            }
            setProducts(res.data.products);
            setLoading(false);
        })
        .catch(err => {
            console.log('here erro:',err);
        });
    },[catgories,sortOrder,priceRange,searchValue]);

    return (
    <div className='container'>
        <div className='row justify-content-between'>
            <div className='col-12 col-md-6'>
            <h2 className='mb-5'>Product List</h2>
            </div>
            <div className='col-12 col-md-6 d-flex justify-content-end'>
                <div onClick={() => setToggleFilterSec(!toggleFilterSec)}><button type="button" className="btn btn-outline-dark">Filter</button></div>
            </div>
        </div>
        <FilterNav 
            toggleFilterSec={toggleFilterSec} 
            data={products} 
            setProducts={setProducts} 
            setPriceRange={setPriceRange} 
            priceRange={priceRange}
            setCatgories={setCatgories} 
            catgories={catgories}
            setSortOrder={setSortOrder}
        />
        <div className='text-center my-5'><h3>{loading && 'Loanding...'}</h3></div>
        {
            !loading && products.length > 0 && 
            <div className='row align-items-start justify-content-start'>
                <div className='col-12'>
                    <div className='row product-list'>
                    {    
                        currentPosts.length === 0 ? <div className='text-center'><h3>No products found</h3></div> :
                        currentPosts.map((item, index) => {
                            return(
                                <div className='col-md-3 col-12 mb-3'>
                                    <Prodcut item={item} handleAddToCart={handleAddToCart} key={index}/>
                                </div>
                            );
                        })
                    }
                    </div>
                </div>
            </div>
        }
        {
            !loading && products.length > 12 && 
            <div className='col-auto flex-fill pages d-flex justify-content-end align-items-center'>
                <Pagination data={products} page={page} setPage={setPage} postsPerPage={postsPerPage}/>
            </div>
        }
        
    </div>
  )
}
