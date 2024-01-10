import {  CameraAlt } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import PhoneInput from 'react-phone-input-2';


const BuisnessDetails = () => {
  const [phone, setPhone] = useState()
  const {
    register,
    getValues,
    handleSubmit,
    
    control,
    formState: { errors },
  } = useForm();
  const [values, setValues] = useState()
  useEffect(()=> {
    console.log(values)
  },[values])
  const onSubmit = (data) => console.log(data)
  return (
    <div className='w-full'>
         <form className='flex w-full px-10 py-6 gap-4' onSubmit={handleSubmit(onSubmit)}>
            <div className='flex flex-col w-1/2 gap-4'>
            <input placeholder='Buisness Name' className='common-input'  {...register("buisnessname")}/>
            <textarea placeholder='Description' className='common-textarea' rows={3} {...register("description")}/>
            <select className='common-select' {...register("category")} placeholder="Category">
              <option>category1</option>
              <option>category1</option>
              <option>category1</option>
              <option>category1</option>
            </select>
            <PhoneInput 
              inputClass='left-[29px] !w-[95%] common-input'
              dropdownClass='!border-2'
              country={'us'}
              value={phone}
              onChange={setPhone}
            />
            <input placeholder='Email address' className='common-input'  {...register("email-address")}/>
            <input placeholder='Buisness web site' className='common-input'  {...register("website-address")}/>
            </div>
            <div className='w-1/2 flex flex-col gap-[30px] items-center justify-center'>
                <div>
                    {console.log(getValues())}
                  <Avatar 
                    className='!w-[200px] !border-2 !border-primary !h-[200px]'
                    src={  getValues()?.profileImage && getValues()?.profileImage[0] ? URL.createObjectURL(getValues()?.profileImage[0]) : ""}
                  />
                </div>
                <input id="profileImage" type="file" {...register("profileImage")} className='hidden'/>
                <label htmlFor='profileImage' className='flex px-3 py-2 rounded-lg bg-[#45818E] text-white w-fit' >
                  <CameraAlt  className='!text-white'/>
                  Upload
                </label>
            </div>
        </form>

    </div>
  )
}

export default BuisnessDetails