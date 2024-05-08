import { useState } from 'react'
import burnel from '/Users/ASUS/Thence/src/assets/Burnel.svg'
import tickround from '/Users/ASUS/Thence/src/assets/tickround.svg'
export default function Congratulations() {
    const [Time,setTime]=useState(5)
  /* to redirect to the home page after 5 seconds */
    setInterval(() => {
         setTime(Time-1)
    }, 1000);
    if (Time===0) {
        window.location.href='/'
    }
  return (
    <div className='flex flex-col justify-between'>
      <nav className="flex justify-between mx-8 mt-8">
        <img src={burnel} alt="Burnel" />
      </nav>
      <div className='flex w-screen items-center justify-center text-center'>
      <div className='flex flex-col justify-center items-center w-[718px] mt-[110px]'>
         <img src={tickround} alt="Tick plus round" height={"80px"} width={"80px"}/>
        <h2 className=' font-Grace text-[#2DA950] text-[36px] '> Success submitted</h2>
        <h3 className=' font-Manrope font-semibold text-[56px] align-middle'>Congratulation</h3>
        <p className='font-Manrope font-medium text-[27px]'>Your request has been successfully submitted to us. We will validate your information and reach out to your shortly with updates</p>
      </div>
      </div>
      <p className=' font-Manrope font-normal text-[20px] text-center mt-[150px]'>You will be redirected to homepage in {" "} <span className='font-bold'>{Time} seconds</span></p>
    </div>
  )
}
