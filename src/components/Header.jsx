import React, { useContext, useState } from 'react'
import {  AccountCircle, ArrowDropDown,SearchOutlined } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import MenuContext from '../context/MenuContext';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const Header = () => {
    const [inputValue,setInputValue] = useState("")
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const {setOpenMobileMenu} = useContext(MenuContext)

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };
  return (
    <div className='p-5 md:w-[90%] w-full ml-auto bg-slate-100 text-xs md:text-sm'>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <div className=' absolute top-1/2 grid grid-cols-2 left-1/2 transform -translate-x-1/2 w-1/2 min-h-[50%] border-none focus:border-transparent focus:ring-0  bg-white -translate-y-1/2  '>
                <div className='py-10'>sfsd</div>
                <div className='lg:block hidden'>dfdsfsdf</div>
            </div>
        </Modal>
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
                <p className='mx-1' onClick={handleOpen}>User Name </p>
                <ArrowDropDown/>
                </div>
                <div onClick={()=>setOpenMobileMenu(true)} className='md:hidden'><MenuIcon/></div>
            </div>
            
        </div>
    </div>
  )
}

export default Header