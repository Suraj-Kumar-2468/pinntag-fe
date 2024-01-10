
import React from 'react'
import Header from '../Header'
import Sidepanal from '../Sidepanal'

const Layout = ({children}) => {
  return (
    <div>
        <Header />
        <div className='flex'>
            <Sidepanal />
            <div className='w-[80%]'>
                {children}
            </div>
        </div>
    </div>
  )
}

export default Layout