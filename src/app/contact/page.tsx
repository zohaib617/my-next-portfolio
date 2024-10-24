export default function Contact(){
    return(


<div className="min-h-screen flex items-center justify-center bg-zinc-900">
      <form 
        
        className=" border-8 border-customOrange w-full max-w-lg bg-white p-5 shadow-lg rounded-lg"
      >
        <h2 className="text-2xl font-bold mb-5">Contact Us</h2>

        <div className="mb-2">
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            
        
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
            placeholder="Your Name"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            
            
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
            placeholder="Your Email"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
          <textarea
            id="message"
            name="message"
            
            
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
            placeholder="Your Message"
            rows={3}
            required
          ></textarea>
        </div>

        <button 
          type="submit" 
          className="w-full bg-blue-500 text-white p-3 rounded-lg font-semibold hover:bg-blue-800 transition"
        >
          Send Message
        </button>
      </form>
    </div>
   
    
    )
}
