import React, { useContext, useState } from 'react'
import {  AccountCircle, ArrowDropDown,SearchOutlined } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import MenuContext from '../context/MenuContext';

const Header = () => {
    const [inputValue,setInputValue] = useState("")

    const {setOpenMobileMenu} = useContext(MenuContext)
  return (
    <div className='p-5 md:w-[90%] w-full ml-auto bg-slate-100 text-xs md:text-sm'>
        <div className='flex justify-between items-center'>
            <div className='relative'>
                <input
                type='text'
                value={inputValue}
                name='inputValue'
                placeholder="Search for Artist"
                onChange={(e)=>setInputValue(e.target.value)}
                className='p-2 pl-10 hidden md:block'
                />
                <SearchOutlined className='absolute left-2 top-1/2 transform  -translate-y-1/2'/>
            </div>
            <div className='flex justify-evenly items-center'>
                <p>Premium</p>
                <p className='mx-5'>Pro</p>
                <div className='flex justify-evenly items-center'>
                <AccountCircle/>
                <p className='mx-1'>User Name </p>
                <ArrowDropDown/>
                </div>
                <div onClick={()=>setOpenMobileMenu(true)} className='md:hidden'><MenuIcon/></div>
            </div>
            
        </div>
    </div>
  )
}

export default Header