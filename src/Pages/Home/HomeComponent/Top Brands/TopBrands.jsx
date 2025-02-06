import React from "react";
import "./TopBrands.css";
import { Link } from "react-router-dom";

const clientLogos = [
  {
    id: 1,
    logo: "https://1000logos.net/wp-content/uploads/2017/12/Casio-Logo.png",
    name: "Rolex",
    alt: "",
  },
  {
    id: 2,
    logo: "https://cdn.easyfrontend.com/pictures/logos/color-logo-2.png",
    name: "Casio",
    alt: "",
  },
  {
    id: 3,
    logo: "https://cdn.easyfrontend.com/pictures/logos/color-logo-3.png",
    name: "Fossil",
    alt: "",
  },
  {
    id: 4,
    logo: "https://cdn.easyfrontend.com/pictures/logos/color-logo-4.png",
    name: "Timex",
    alt: "",
  },
  {
    id: 5,
    logo: "https://cdn.easyfrontend.com/pictures/logos/color-logo-5.png",
    name: "Tissot",
    alt: "",
  },
  {
    id: 6,
    logo: "https://cdn.easyfrontend.com/pictures/logos/color-logo-6.png",
    name: "MVMT",
    alt: "",
  },
  {
    id: 7,
    logo: "https://cdn.easyfrontend.com/pictures/logos/color-logo-7.png",
    name: "Garmin",
    alt: "",
  },
  {
    id: 8,
    logo: "https://cdn.easyfrontend.com/pictures/logos/color-logo-8.png",
    name: "Swatch",
    alt: "",
  },
];

const TopBrands = () => {
  return (
    <div className=" bg-black text-white py-12 ">
      <p className="text-center text-4xl font-semibold tex">TOP BRANDS</p>

      <section className="ezy__clients3 light text-zinc-900 dark:text-white ">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4  lg:pl-16 mx-7 mt-5 justify-center items-center text-center ">
            {clientLogos.map((client, i) => (
              <Link to={`/products?brand=${client.name}`} id={client.id}>
                <img
                  src={client.logo}
                  alt={client.alt}
                  className="max-h-[50px] h-auto max-w-full px-12 my-4 lg:my-8"
                  key={i}
                />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TopBrands;
