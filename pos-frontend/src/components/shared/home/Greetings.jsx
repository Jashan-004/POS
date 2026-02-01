import { useState, useEffect } from 'react';

const Greetings = () =>{

    const[currentDateTime,setDateTime]= useState(new Date());
        
    useEffect(() => {
        const intervalId = setInterval(() => setDateTime(new Date()), 1000);
        return () => clearInterval(intervalId);
    },[]);

   
    return (
        <div className ="flex justify-between items-center px-8 mt-5">
            <div>
                <h1 className = "text-[#f5f5f5] text-2xl font-semibold tracking-wide">Good Morning,Jashan</h1>
                <p className = "text-[#ababab] text-sm">Give your best services for customers</p>
            </div>
            <div>
                <h1 className =" text-[#f5f5f5] text-3xl font-bold tracking-wide w-[130px]">{currentDateTime.toLocaleTimeString()}</h1>
                <p className="text-[#ababab] text-sm">{currentDateTime.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            </div>
        </div>
    )
}

export default Greetings