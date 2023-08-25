import React from 'react'

export const Pagination = ({ data,setPage,page,postsPerPage }) => {
    const totalPosts = data.length;
    const totalPages = Math.ceil(totalPosts / postsPerPage);
    return (
    <>
        <nav aria-label="Page navigation example" className=' my-5'> 
            <ul className="pagination m-0 p-0"> 
                <li className="page-item"> 
                    <a className="page-link" aria-label="Previous" onClick={() => (page > 1) ? setPage(page-1) : null} style={{cursor:'pointer',opacity: page > 1 ? '1' : '0.5',pointerEvents: page > 1 ? 'unset' : 'none'}}> 
                        <span aria-hidden="true" className="font-weight-bold">&lt;</span> 
                        <span className="sr-only">Previous</span> 
                    </a> 
                </li> 
                {
                    [...Array(totalPages).keys()].map(number => (
                        <li className={page === number+1 ? 'page-item active' : 'page-item'} key={number+1}>
                            <a className="page-link" onClick={() => setPage(number+1)} style={{cursor:'pointer'}}>{number+1}</a>
                        </li> 
                    ))
                }
                <li className="page-item"> 
                    <a className="page-link" aria-label="Next" onClick={() => (page<totalPages) ? setPage(page+1) : null} style={{cursor:'pointer',opacity: page<totalPages ? '1' : '0.5',pointerEvents: page<totalPages ? 'unset' : 'none'}}> 
                        <span className="sr-only">Next</span> 
                        <span aria-hidden="true" className="font-weight-bold">&gt;</span> 
                    </a> 
                </li> 
            </ul> 
        </nav>
    </>
  )
}
