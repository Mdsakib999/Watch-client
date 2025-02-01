import React from 'react';
import "./TopBrands.css";

const clientLogos = [
	{
		logo: "https://1000logos.net/wp-content/uploads/2017/12/Casio-Logo.png",
		alt: "",
	},
	{
		logo: "https://cdn.easyfrontend.com/pictures/logos/color-logo-2.png",
		alt: "",
	},
	{
		logo: "https://cdn.easyfrontend.com/pictures/logos/color-logo-3.png",
		alt: "",
	},
	{
		logo: "https://cdn.easyfrontend.com/pictures/logos/color-logo-4.png",
		alt: "",
	},
	{
		logo: "https://cdn.easyfrontend.com/pictures/logos/color-logo-5.png",
		alt: "",
	},
	{
		logo: "https://cdn.easyfrontend.com/pictures/logos/color-logo-6.png",
		alt: "",
	},
	{
		logo: "https://cdn.easyfrontend.com/pictures/logos/color-logo-7.png",
		alt: "",
	},
	{
		logo: "https://cdn.easyfrontend.com/pictures/logos/color-logo-8.png",
		alt: "",
	},
];


const TopBrands = () => {
    return (
        <div className='b bg-black text-white py-12'>
            <p className='text-center text-4xl font-semibold tex'>TOP BRANDS</p>


            <section className="ezy__clients3 light  bg--[#0b1727] text-zinc-900 dark:text-white">
			<div className="container px-4 mx-auto">
	
				<div className="grid grid-cols-4  pl-16 mx-7 mt-5 justify-center items-center text-center ">
					{clientLogos.map((client, i) => (
						<img
							src={client.logo}
							alt={client.alt}
							className="max-h-[50px] h-auto max-w-full px-12  my-8"
							key={i}
						/>
					))}
				</div>
			</div>
		</section>
        </div>
    );
};

export default TopBrands;