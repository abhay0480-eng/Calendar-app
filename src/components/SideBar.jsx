// import { Navigation, Home, ArrowDropDown , ArrowDropUp } from '@mui/icons-material'
// import React, { useState } from 'react'
// import MenuData from '../menu.json'

// const SideBar = () => {
//     const [hideSubMenu, setHideSubMenu] = useState(false)

//   return (
//     <div className=' w-[90%]  md:w-[10%] h-screen fixed left-0 top-0 bg-white shadow-2xl flex justify-center'>
//         <div className='mt-20'>
//         <p className='flex items-center'><Home/> Home</p>
//         {Object.entries(MenuData).map((item, index)=> {
//             let list = item[1].map((item)=>item)
//             return(
//                 <div key={index} className='mt-5'>
//                     <p onClick={()=> setHideSubMenu(pre=>!pre)} className='font-bold text-lg my-2 cursor-pointer'>{item[0]} <span className=''>{hideSubMenu?<ArrowDropDown/>:<ArrowDropUp/>}</span></p>
//                     <div key={index} className={`${!hideSubMenu?"h-0":"h-[170px]"} duration-200 overflow-hidden`}>
//                    { list.map((item, index)=> {
//                     return(
//                         <p key={index}>{item}</p>
//                     )
//                    })}
//                     </div>
//                 </div>
//             )
//         })}
//         </div>
//     </div>
//   )
// }

// export default SideBar

import { Navigation, Home, ArrowDropDown, ArrowDropUp, Close } from '@mui/icons-material';
import React, { useContext, useState } from 'react';
import MenuData from '../menu.json';
import MenuContext from '../context/MenuContext';

const SideBar = () => {
  const [openSubmenus, setOpenSubmenus] = useState({});

  const toggleSubmenu = (menuKey) => {
    setOpenSubmenus((prev) => ({
      ...prev,
      [menuKey]: !prev[menuKey],
    }));
  };

  const {openMobileMenu,setOpenMobileMenu} = useContext(MenuContext)


  return (
    <div className={`${openMobileMenu?"right-0":" -right-[100%]"} duration-500 w-[100%] md:w-[10%] h-screen fixed md:left-0 top-0 bg-white shadow-2xl flex md:justify-center p-4 md:p-auto`}>
      <div className='md:mt-20 w-full md:w-auto'>
        <div className=' md:hidden flex justify-end items-center'>
          <p onClick={()=>setOpenMobileMenu(false)}><Close/></p>
        </div>
        <p className='flex items-center'>
          <Home /> Home
        </p>
        {Object.entries(MenuData).map((item, index) => {
          const menuKey = item[0];
          const list = item[1].map((item) => item);

          return (
            <div key={index} className='mt-5'>
              <p
                onClick={() => toggleSubmenu(menuKey)}
                className='font-bold text-lg my-2 cursor-pointer'
              >
                {menuKey}{' '}
                <span className=''>
                  {openSubmenus[menuKey] ? <ArrowDropDown /> : <ArrowDropUp />}
                </span>
              </p>
              <div
                key={index}
                className={`${!openSubmenus[menuKey] ? 'h-0' : 'h-[170px]'} duration-200 overflow-hidden`}
              >
                {list.map((item, index) => {
                  return <p key={index}>{item}</p>;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SideBar;
