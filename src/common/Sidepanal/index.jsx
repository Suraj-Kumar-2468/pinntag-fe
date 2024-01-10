import React from 'react'
import { sidepanalLinks } from '../../contentmanagement/sidepanal'
import { Link, useLocation } from 'react-router-dom'
import classNames from 'classnames'

const Sidepanal = () => {
    const location = useLocation()

    return (
        <div className='flex flex-col gap-[20px] h-[calc(100vh-144px)] p-5 w-1/5 bg-primary'>
            {
                sidepanalLinks.map((items) => {
                    return <Link to={items.Link}>
                        <div className={classNames( location.pathname === items.Link ? "bg-black text-white" : "hover:bg-opacity-10 hover:bg-black" ,'w-full cursor-pointer  active:shadow-none shadow-lg rounded-lg py-2 font-semibold text-center border-2 border-secondary text-[20px]')}>
                            {items.Title}
                        </div>
                    </Link>

                })
            }

        </div>
    )
}

export default Sidepanal    