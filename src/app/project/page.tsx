
import { Building2,ShoppingCart,HandPlatter } from 'lucide-react';
import Link from 'next/link';
import Footer from '../components/footer';

export default function Project(){
const project =[

    {
        title: 'Resume Builder',
        description: 'Dynamic Resume Builder allows users to create a professional resume with a unique, editable link. Users can customize their resume anytime and share it via a unique URL. It also includes a PDF download option for easy sharing.',
        icon: <a href="https://zohan786.vercel.app/"> <Building2 className='w-16 h-16 transform hover:scale-150 transition duration-200 ease-in-out' /></a>
    },
    {
        title: 'shop.co',
        description: 'A modern and responsive e-commerce design optimized for all devices. It features intuitive navigation, seamless product browsing, and a user-friendly interface for an enhanced shopping experience.',
       icon: <a href="https://assignment-4-zohan786.vercel.app/"> <ShoppingCart className='w-16 h-16 transform hover:scale-150 transition duration-200 ease-in-out' /> </a>
    },
    {
        title: 'FoodTuck',
        description: 'FoodStuck is a Q-commerce marketplace for restaurants, allowing users to search for products, filter items by category, and sort by price or tags. Users can add items to their cart and securely complete payments using Stripe.  ',
        icon: <a href="https://marketplace786-zohaib.vercel.app/"><HandPlatter className='w-16 h-16 transform hover:scale-150 transition duration-200 ease-in-out' /></a>
    }
];

    return(
<div className='max-w-7xl mx-auto px-6 py-12 flex flex-col justify-center items-center ' > 
<h1 className=" text-gray-500 text-4xl font-bold text-center mb-8">My Projects</h1>
<p className='text-center text-gray-300 font-sans font-bold w-full lg:w-[600px] p-6 text-[16px]' >I specialize in creating visually appealing and high-performance websites. Whether you need a modern web design, a functional portfolio, or expert guidance in web development, I’ve got you covered!</p>
   
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-24 " > 
    
    {project.map((project,index)=>(
        <div key={index}  className="bg-gray-800 shadow-black shadow-xl rounded-2xl p-6">
            <div className='text-gray-500 flex justify-center items-center' >{project.icon}</div>
            <h1 className='text-2xl font-sans font-bold text-center p-2 text-[#CA5900]' >{project.title}</h1>
            <p className='text-gray-100 text-center font-bold' >{project.description}</p>
        </div>
    ))}

</div>
<Footer/>
</div>
    )
}