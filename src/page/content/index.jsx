import React from 'react'
import { socialMediaPost } from '../../contentmanagement/sidepanal'
import Image from '../../component/image'
import Text from '../../common/Text'
import { Add, CalendarMonth, DeleteOutline, EditOutlined, FilterAlt, MenuOutlined } from '@mui/icons-material'

const Content = () => {
  return (
    <div  className=''>
      <div className=' flex w-full relative justify-between mob:gap-[10px] mob:flex-col mob:px-[10px] pl-[80px] pt-[30px] pr-[160px]'>
        <div className='flex items-center gap-3'>
        <Text className="text-[24px] mob:text-[16px] font-bold">Content</Text>
        <MenuOutlined  className='text-[#45818E]'/>
        </div>
        <div className='flex text-[#45818E] items-center'>
        <Text className="pr-2 border-r-2 border-black">View List</Text>
        <Text className="pr-2 "><CalendarMonth /> View Calender</Text>
        </div>
        <div className='flex items-center mob:absolute mob:right-[10px] mob:bottom-0 mob:ml-auto'>
        <FilterAlt className='text-[#45818E]' />
        <label className='flex px-3 py-2 cursor-pointer rounded-lg bg-[#45818E] text-white w-fit' >
                  <Add  className='!text-white'/>
                    Add
        </label>
        </div>
      </div>
      <div className='grid grid-cols-4 mob:grid-cols-2 mob:p-[10px] gap-6 pl-[80px] py-[30px] pr-[160px]'>
        {socialMediaPost.map(items => {
          return <div className='relative flex flex-col items-center justify-center overflow-hidden border border-black rounded-xl'>
            <div className='absolute flex justify-between w-full px-3 top-2'>
              <div className='bg-[#45818E] text-white  px-2 rounded-md '>{items.status}</div>
              <div className='flex gap-2'>
                <EditOutlined className='p-1 rounded-full !text-white bg-black' />
                <DeleteOutline className='p-1 rounded-full !text-white bg-black'/>
              </div>
            </div>
            <div className='flex items-center justify-center w-full bg-cover'>
            <Image src={items.image} className={"max-w-full absolute -z-10 blur-md object-cover"} alt={items.discription}/>
              <Image src={items.image} className={"max-w-full w-[50%] object-contain"} alt={items.discription}/>
            </div>
            <div className='w-full p-2 bg-black'>
              <Text className="font-bold text-white">
                {items.discription}
               </Text>
            </div>

          </div>
        })}
        {

        }
      </div>
    </div>
  )
}

export default Content