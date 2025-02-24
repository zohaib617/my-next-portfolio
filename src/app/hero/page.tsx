"use client";

import { Typewriter } from "react-simple-typewriter";
import { Github, Linkedin, Facebook } from 'lucide-react';
import Footer from "../components/footer";
import { useState } from "react";

export default function Hero(){

const [showNumber, setShowNumber]=useState(false)
    return(




       <section className="container mx-auto px-4 py-12 lg:mt-24">

<div className=" flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-16 ">


<div className=' flex flex-col justify-between items-start space-y-6 w-full lg:w-[518px] '>

    <p className="text-gray-500 font-bold  " >Hi I am</p>
    <h1 className=" text-[#CA5900] font-sans font-bold text-3xl lg:text-4xl">Syed Zohaib shah</h1>
    <h1 className=" text-4xl font-sans font-bold">
        
        
        
        
        
        {" "}
        <span className="text-gray-400">
          <Typewriter
            words={[
              "Front-end Developer",
              "Web Designer",
              "UI/UX Designer",
              "Next.js Developer",
              "Tailwind CSS Expert",
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </span>
        
        
        
        
        </h1>

        <div className="text-white flex gap-4">
          <a href="https://github.com/zohaib617">  <Github className="hover:text-[#CA5900] cursor-pointer" size={18} /></a>
           <a href="https://www.linkedin.com/in/zohaib-shah-2923502b9/"> <Linkedin className="hover:text-[#CA5900] cursor-pointer" size={18} /></a>
           <a href="https://web.facebook.com/zohaib.shah.336"> <Facebook className="hover:text-[#CA5900] cursor-pointer" size={18} /></a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="w-full lg:w-[156px] h-[48px] text-sm lg:p-0 p-4 lg:text-lg  border-2 font-bold hover:text-white border-white rounded-md text-gray-400 hover:bg-[#CA5900] transition-colors"
            onClick={() => setShowNumber((prev)=>!prev)}
            >
              {showNumber ? "+923198251617": "Hire Me"}
            </button>
            <a href="https://hackathone-milestone-1-2-coral.vercel.app/"><button className="w-full lg:w-[209px] h-[48px] text-sm lg:p-0 p-4 lg:text-lg border-2 font-bold hover:text-white border-white rounded-md text-gray-400 hover:bg-[#CA5900] transition-colors">
              Download CV
            </button></a>
          </div>

</div>




<div>
<div className="relative bg-gray-700 rounded-full  w-[350px] h-[350px] flex items-center justify-center mt-24 lg:mt-0 ">
  <img src="/pic.png" className="w-[400px] h-[400px] object-cover absolute mb-36 mr-4 " alt="pic" />
</div>
</div>

</div>



<Footer/>
       </section>
    )
}