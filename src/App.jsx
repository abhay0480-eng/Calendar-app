import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { CalendarMonth, Add, ChevronLeft, ChevronRight,ArrowDropDown, Delete, Share, FastRewind } from '@mui/icons-material'


import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import SideBar from './components/SideBar'
import Button from './components/common/Button'

function App() {
  const months = ['January', 'February', 'March', 'April', 'May','June', 'July', 'August', 'September','October','November', 'December'] 
  const date = new Date();
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const todayDate = date.toLocaleDateString('en-US', options);
  const year = date.getFullYear()
  const [month, setMonth] = useState(1);

  const daysInMonth = new Date(year, month, 0).getDate();

  const arr = Array.from({length: daysInMonth}, (_,index)=> `${index+1}`)
  const timeline = Array.from({length: 24}, (_,index)=> index+1)
  console.log(timeline);

  const time = timeline.filter((items)=> items>=8 && items<=15)
  console.log(time);



  
  return (
    <>
     <div className='relative flex flex-col h-screen '>
      <Header/>
      <SideBar/>
      <main>
        <div className='md:w-[90%] w-full ml-auto h-full text-xs'>
          <div className='shadow-2xl bg-white md:w-[95%] m-5 rounded-2xl'>
          <div className='py-4 border-b-[1px] border-black'>
            <h1 className='font-semibold text-3xl  p-2'>Calender</h1>
          </div>
          <div className='md:grid md:grid-cols-4 p-5'>
            <div className='col-span-3 p-3'>
              <div className='flex justify-between items-center flex-wrap md:flex-nowrap gap-3'>
                <div className='flex justify-between items-center'>
                  <div>
                    <p>{todayDate}</p>
                  </div>
                  <div>
                  <select name="Activity Type" className='p-2 mx-4 border-[1px] border-black rounded-md'>
                    <option value="Activity Type">Activity Type</option>
                  </select>
                  </div>
                </div>

                <div className='flex justify-around items-center'>
                  <div className='border-[1px] border-black rounded-md p-2'><CalendarMonth/></div>
                  <div className='flex  justify-between items-center  border-[1px] mx-3 border-black rounded-md'>
                    <div className='p-2 '>Day</div>
                    <div className='p-2 bg-slate-400'>Week</div>
                  </div>
                    <Button><Add/>Schedule Music</Button>
                </div>
              </div>
              <div className='my-5'>
                {time.map((item,index)=> {
                  return(
                  <div key={index} className='grid grid-cols-9 border-black  border-b-[1px] w-full ' >
                  <div className='border-r-[1px] border-black   w-14  col-span-1 h-20'>
                    <p>{item}:00</p>
                  </div>
                    <div className='border-black  border-r-[1px]  col-span-2 h-20'>
                      <div className='border-l-[2px] bg-slate-300 text-black rounded-md p-2'>
                        <p>Jai Shree Ram</p>
                        <p>To be Played in 15min</p>
                      </div>
                    </div>
                    <div className='border-black border-r-[1px]  col-span-2 h-20'></div>
                    <div className='border-black  border-r-[1px]  col-span-2 h-20 '></div>
                    <div className=' col-span-2 h-20'></div>
                  </div>
                  )
                })}
                
              </div>
            </div>


            <div className='my-8'>

              <div>
                <div className='flex justify-between px-2'>
                  <p><span>{months[month-1]}</span> <span>{year}</span></p>
                  <div className='flex justify-between items-center'>
                    <span onClick={()=>month>1 && setMonth(pre=>pre-1) }> <ChevronLeft/></span>
                    <span onClick={()=>month<12 &&setMonth(pre=>pre+1) }><ChevronRight /></span>
                  </div>
                </div>
                <div>
                  <div className='grid grid-cols-7 content-center justify-items-center mt-4'>
                    <p>Sun</p>
                    <p>Mon</p>
                    <p>Tue</p>  
                    <p>Wed</p>  
                    <p>Thu</p>  
                    <p>Fri</p>  
                    <p>Sat</p>  
                  </div>
                  <div className='grid grid-cols-7 gap-2 mt-2 content-center justify-items-center'>
                   {arr.map((item, index)=> {
                    return(
                      <p key={index}>{item}</p>
                    )
                   })} 
                  </div>
                </div>
              </div>

              <div className='my-5'>
                <p className='font-bold'>Scheduled</p>
                <div className='grid grid-cols-2 text-center'>
                   <div>Avtivity Type <ArrowDropDown/></div>
                   <div>Musical activity <ArrowDropDown/></div>
                </div>
                <div className='flex text-center'>
                  <div className='w-[50%] '>
                    <p>Work out</p>
                    <p>Study</p>
                    <p>Other</p>
                    <p>17 Jun 2023</p>
                  </div>
                  <div className='w-[50%] '>
                    <p>Listen</p>
                    <p>Practice</p>
                    <p>Other</p>
                    <p>11:30 pm</p>
                  </div>
                </div>
              </div>

              <div className='my-5'>
                <p className='font-bold'>Music</p>
                <div className='flex p-2 justify-between items-center'>
                  <p>Track 1</p>
                  <div className='flex items-center'>
                    <Add/>
                    <Delete/>
                  </div>
                </div>
                <div className='flex p-2 justify-between items-center'>
                  <p>Track 2</p>
                  <div className='flex items-center'>
                    <Add/>
                    <Delete/>
                  </div>
                </div>
              </div>
              <div className='flex justify-between items-center'>
                <Button><Share/> Share</Button>
                <Button><FastRewind/> Remind me </Button>
              </div>
            </div>
          </div>
          </div>
        </div>
      </main>
      <Footer/>
     </div>
    </>
  )
}

export default App
