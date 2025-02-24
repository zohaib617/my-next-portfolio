'use client'

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"



 
export default function Navbar(){
const [showNumber, setShowNumbber]=useState(false)
const [isOpen, setIsOpen] = useState(false);
  return(


    <div className=" relative flex justify-between items-center w-full  lg:w-[1440px] h-auto lg:h-[60px] bg-[#1E1E1E] px-6  " >


  <Link href='/' className="text-[#CA5900] text-2xl font-bold font-sans">ZohanSoft </Link>



<div className="hidden md:flex gap-6 " >
<Link href='/' className="hover:text-[#CA5900] text-[#FED2B0] text-lg font-bold font-sans">Home </Link>
<Link href='/about' className="hover:text-[#CA5900] text-[#FED2B0] text-lg font-bold font-sans">About </Link>
<Link href='/skills' className="hover:text-[#CA5900] text-[#FED2B0] text-lg font-bold font-sans"> Skills </Link>
<Link href='/services' className="hover:text-[#CA5900] text-[#FED2B0] text-lg font-bold font-sans"> Services </Link>
<Link href='/project' className="hover:text-[#CA5900] text-[#FED2B0] text-lg font-bold font-sans">Projects </Link>
<Link href='/contact' className="hover:text-[#CA5900] text-[#FED2B0] text-lg font-bold font-sans">Contact </Link>

</div>



  <button className="  hidden md:block  bg-[#CA5900] py-1 px-2 rounded-md text-[#FED2B0] text-lg font-bold font-sans  hover:text-gray-700 mr-6"
  
  onClick={() => setShowNumbber((prev)=>!prev)}
  >{showNumber ? "+923198251617": "Hire Me"} </button>



<div className="md:hidden">

  <button
  onClick={()=> setIsOpen(!isOpen)}
  className="p-2 text-gray-400  hover:text-white  hover:bg-gray-700 rounded-md"

  >
    
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            

  </button>

</div>

{isOpen && (
  <div className="absolute top-full left-0 w-full bg-[#1E1E1E] p-4 flex flex-col gap-4 shadow-md " >
    
<Link href='/' className="hover:text-[#CA5900] text-[#FED2B0] text-lg font-bold font-sans hover:bg-gray-700">Home </Link>
<Link href='/about' className="hover:text-[#CA5900] text-[#FED2B0] text-lg font-bold font-sans  hover:bg-gray-700 ">About </Link>
<Link href='/skills' className="hover:text-[#CA5900] text-[#FED2B0] text-lg font-bold font-sans hover:bg-gray-700 "> Skills </Link>
<Link href='/services' className="hover:text-[#CA5900] text-[#FED2B0] text-lg font-bold font-sans hover:bg-gray-700 "> Services </Link>
<Link href='/project' className="hover:text-[#CA5900] text-[#FED2B0] text-lg font-bold font-sans hover:bg-gray-700 ">Projects </Link>
<Link href='/contact' className="hover:text-[#CA5900] text-[#FED2B0] text-lg font-bold font-sans hover:bg-gray-700 ">Contact </Link>
</div>
 )}

    </div>
  )
}