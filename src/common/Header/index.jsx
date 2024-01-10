import React from 'react'
import Image from '../../component/image'
import Text from '../Text'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='bg-secondary  gap-3 flex w-full py-6 px-6 '>
        <Image
            src={"/assets/images/mainlogo.jpg"}
            alt="mainlogo"
            className={"rounded-full border-[5px] w-[100px]  border-primary"}
        />
        <div className='flex flex-col mt-auto'>
            <Text className="text-white font-semibold text-[24px]">
                The Buff Restaurant 
            </Text>
            <Text className="text-primary font-semibold text-[24px]">Administration Portal</Text>
        </div>
        <div className='ml-auto flex items-end gap-9'>
        <div className=''>
            <Link to={"#"}>
                <Text className="underline text-white">
                    Sign In
                </Text>
            </Link>
        </div> 
        <Image src="/assets/images/LogoSign.svg" className={"w-[100px]"} />
        </div>
        
    </div>
  )
}

export default Header