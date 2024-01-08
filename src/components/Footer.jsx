import React from 'react'
import { Autorenew, FavoriteBorderOutlined, PlayCircle, Shuffle, SkipNext, SkipPrevious, VolumeDown } from '@mui/icons-material'


const Footer = () => {
  return (
    <div className='text-center mt-auto z-40 p-2 bg-white shadow-xl border-t-[1px] border-black grid grid-cols-12 content-center text-xs'>
        <div className='col-span-1'>
            <img src='' alt='' className=''/>
        </div>
        <div className='col-span-8  md:col-span-2 '>
            <p>kesariya</p>
            <p>Pritam</p>
        </div>
        <div className='col-span-1 hidden md:block'><FavoriteBorderOutlined/></div>
        <div className='col-span-1 hidden md:block'><Shuffle/></div>
        <div className='flex  items-center justify-center col-span-2'>
            <SkipPrevious/>
            <PlayCircle/>
            <SkipNext/>
        </div>
        <div className='col-span-1 hidden md:block'><Autorenew/></div>
        <div className='col-span-2 hidden md:block'></div>
        <div className='col-span-1 hidden md:block'><VolumeDown/></div>
        <div className='col-span-1 hidden md:block'></div>
    </div>
  )
}

export default Footer