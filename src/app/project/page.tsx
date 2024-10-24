import { resolve } from "path";
import Navbar from "../components/navbar";

export default async function Project() {


    await new Promise((resolve) =>{
        setTimeout (resolve,5000);
    })
 return (
    
<section className= " p-5  mt-10 flex justify-center content-center items-center" >
    <div className="w-64 rounded-2xl bg-gray-100  border-4 border-customOrange ">
    <h1 className="text-center font-bold text-2xl text-customOrange mt-3">45 Asignment</h1>

    <a href="https://github.com/zohaib617/TypeScript-First-Assignment.git">
    <img src="/image/45.WEBP"  className="  w-64 h-64 border-4 border-gray-800 transform hover:scale-110 transition duration-500 ease-out "  alt="project1" /> 
    </a>

    <p className=" text-center font-sans text-black "> I completed FOURTY FIVE assignment of TypeScript, consisting of fourty five tasks using TypeScript
    these are FOURTY FIVE assignment which giving by our Teachers. </p>
    
    
    </div>



   


    <div className="w-64 m-5 rounded-2xl bg-gray-100  border-4 border-customOrange">
    <h1 className="text-center font-bold text-2xl text-customOrange mt-3">Resume Builder</h1>

    <a href="https://hackathon-milestone-5-mauve.vercel.app/">
    <img src="/image/resume1.jpeg"  className="  w-64 h-64 border-4 border-gray-800 transform hover:scale-110 transition duration-500 ease-out"  alt="project2" /> 
    </a>

    <p className=" text-center font-sans text-black ">Using HTML CSS TypeScript, I construct a resume builder hackathone based on five milestones that can be ediable by user
         and shareable link for download as pdf </p>
    
    </div>

 
 
 
    <div className="w-64 rounded-2xl bg-gray-100  border-4 border-customOrange">
    <h1 className="text-center font-bold text-2xl text-customOrange mt-3">CLI Projects</h1>

    <a href="https://github.com/zohaib617?tab=repositories">
    <img src="/image/cli.jpg"  className="  w-64 h-64 border-4 border-gray-800  transform hover:scale-110 transition duration-500 ease-out"  alt="project3" /> 
    </a>

    <div><p className=" text-center font-sans text-black ">


            (1) ATM
            (2) Currency Convertor
            (3) Number guassing game
            (4) OOP My Bank
            (5) OOP
            (6) Quiz App
            (7) Culculator
            (8) Stop Watch
            (9) Student Manegment
            (10) To DO List
            (11) Word Counter

    </p>
    </div>
    </div>



</section>














 )   
}