import React from 'react';

const ErrorPage = () => {
  return (

    <section className='flex justify-center '>
    <div className=" items-center mt-16 bg-gray-100 w-5/12 h-60 border-4 border-customOrange transform hover:scale-110 transition duration-500 ease-out">
      <h1 className="text-3xl font-bold text-gray-600 text-center mt-2">Error !!!..</h1>
      <p className="text-3xl font-bold text-gray-800  flex justify-center text-center mt-14">Something Went Wrong!  Try Again</p>
    </div>
    </section>
  );
};

export default ErrorPage;