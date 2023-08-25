import React from 'react'
export const AccountPopup = ({setHeaderToggleObj}) => {
    const handleSignout = () => {
        setHeaderToggleObj({account:false,cart:false});
    }
    return (
    <>  <div>
            <div className='account-sect1 d-flex align-items-center mb-3'>
                <div>
                    <img src='https://images.pexels.com/photos/14661/pexels-photo-14661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' style={{width: '40px', height: '40px'}}/>
                </div>    
                <div className='ms-2' style={{textAlign: 'left'}}>
                    <h5 className='m-0'>Eden Smith</h5>
                    <div>Los Angeles, CA</div>
                </div>
            </div>
            <div className='divider mb-3'></div>
            <div className='account-sect2'>
                <div className='d-flex align-items-center mb-3'>
                    <div className='me-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16" style={{width: '1.5rem', height: '1.5rem'}}>
                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                        </svg>
                    </div>     
                    <div>
                        My Account
                    </div>
                </div>
                <div className='d-flex align-items-center mb-3'>
                    <div className='me-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-card-list" viewBox="0 0 16 16" style={{width: '1.5rem', height: '1.5rem'}}>
                            <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
                            <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/>
                        </svg>
                    </div>      
                    <div>
                        My Order
                    </div>
                </div>
                <div className='d-flex align-items-center mb-3'>
                    <div className='me-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16" style={{width: '1.5rem', height: '1.5rem'}}>
                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                        </svg>
                    </div>       
                    <div>
                        Wishlist
                    </div>
                </div>
            </div>
            <div className='divider'></div>
            <div className='account-sect3 mt-3'>
                <div className='d-flex align-items-center mb-3'>
                    <div className='me-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-left" viewBox="0 0 16 16" style={{width: '1.5rem', height: '1.5rem'}}>
                            <path fillRule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"/>
                            <path fillRule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/>
                        </svg>
                    </div>    
                    <div onClick={handleSignout}>
                        Sign Out
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
