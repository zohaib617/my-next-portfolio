"use client";

import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../components/footer";

export default function ContactPage() {
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsProcessing(true);

    const formData = new FormData(event.currentTarget);

    try {
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      toast.success("✅ Message sent successfully!", {
        position: "top-right",
        autoClose: 3000,
      });

      event.currentTarget.reset(); // Reset form fields
    } catch (error) {
      // Ignore errors, do nothing
    }

    setIsProcessing(false);
  };

  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-6 text-white">Contact Me</h2>
      <form 
        onSubmit={handleSubmit} 
        className="flex flex-col space-y-4 max-w-lg mx-auto bg-gray-900 p-8 rounded-lg"
      >
        {/* Web3Forms API Key */}
        <input type="hidden" name="access_key" value="879d02f3-f5d9-4ab0-b871-2b5c6baa59e2" />

        <input 
          type="text" 
          name="name" 
          placeholder="Name" 
          className="p-3 rounded-md bg-gray-800 border border-gray-600 focus:outline-none focus:border-[#CA5900] text-white" 
          required 
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Email" 
          className="p-3 rounded-md bg-gray-800 border border-gray-600 focus:outline-none focus:border-[#CA5900] text-white" 
          required 
        />
        <input 
          type="tel" 
          name="phone" 
          placeholder="Phone Number" 
          className="p-3 rounded-md bg-gray-800 border border-gray-600 focus:outline-none focus:border-[#CA5900] text-white" 
          required 
        />
        <textarea 
          name="message" 
          placeholder="Message" 
          rows={4} 
          className="p-3 rounded-md bg-gray-800 border border-gray-600 focus:outline-none focus:border-[#CA5900] text-white" 
          required
        ></textarea>

        <button 
          type="submit" 
          className="w-full p-3 font-bold bg-[#CA5900] hover:bg-orange-700 rounded-md transition-colors disabled:opacity-50"
          disabled={isProcessing}
        >
          {isProcessing ? "Processing..." : "Send Message"}
        </button>
      </form>

      {/* Toast Notifications */}
      <ToastContainer />
      
      <Footer />
    </section>
  );
}
