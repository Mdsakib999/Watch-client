import React from 'react';

const Banner = () => {
    return (
        <div className='flex justify-evenly items-center  pb-10'>
            <div className='w-[60%]'>
                <p className='lg:w-[80%] mb-7 text-5xl font-bold font-serif'>FIND WATCHES THAT MATCHES YOUR STYLE</p>

                <p className='lg:w-[90%] mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore sapiente nobis quo, dicta eum, praesentium rem consequatur voluptatum odio nisi, id illum facere quam! Quaerat perspiciatis quo odio itaque consequatur!</p>

                <button className='px-8 py-2 rounded-full bg-black font-semibold text-gray-200'>Shop Now</button>

                <div className='flex mt-8  text-center '>
                    <div className=' pr-10 border-r'>
                        <p className='font-bold text-3xl'>200+</p>
                        <p>International Brands</p>
                    </div>
                    <div className=' px-10 border-r'>
                        <p className='font-bold text-3xl'>2000+</p>
                        <p>High-quality Products</p>
                    </div>
                    <div className=' pl-10 '>
                        <p className='font-bold text-3xl'>20000+</p>
                        <p>Happy Customers</p>
                    </div>
                </div>

            </div>

            <div>
                {/* img */}
                <img src="https://img.freepik.com/premium-vector/realistic-watch-clock-black-face-silver-red-arrow-white-number-with-fabric-strap-isolated-vector_33869-4744.jpg?w=360" alt="" />
            </div>
            
        </div>
    );
};

export default Banner;