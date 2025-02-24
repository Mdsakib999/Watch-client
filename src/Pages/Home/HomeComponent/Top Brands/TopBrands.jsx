import React from "react";
import "./TopBrands.css";
import { Link } from "react-router-dom";
import CASIO from "/src/assets/Images/CASIO.png";
import FOSSIL from "/src/assets/Images/FOSSIL.png";
import ROLEX from "/src/assets/Images/ROLEX.png";
import TIMEX from "/src/assets/Images/TIMEX.png";
import TISSOT from "/src/assets/Images/TISSOT.png";
import MVMT from "/src/assets/Images/MVMT.png";
import GARMIN from "/src/assets/Images/GARMIN.png";
import SWATCH from "/src/assets/Images/SWATCH.png";
import OMEGA from "/src/assets/Images/OMEGA.png";
import NAVIFORCE from "/src/assets/Images/NAVIFORCE.png";


const clientLogos = [
  {
    id: 1,
    logo: ROLEX,
    name: "Rolex",
    alt: "",
  },
  {
    id: 2,
    logo: CASIO,
    name: "Casio",
    alt: "",
  },
  {
    id: 3,
    logo: FOSSIL,
    name: "Fossil",
    alt: "",
  },
  {
    id: 4,
    logo: TIMEX,
    name: "Timex",
    alt: "",
  },
  {
    id: 5,
    logo: TISSOT,
    name: "Tissot",
    alt: "",
  },
  {
    id: 6,
    logo: MVMT,
    name: "MVMT",
    alt: "",
  },
  {
    id: 7,
    logo: GARMIN,
    name: "Garmin",
    alt: "",
  },
  {
    id: 8,
    logo: SWATCH,
    name: "Swatch",
    alt: "",
  },
  {
    id: 9,
    logo: OMEGA,
    name: "Omega",
    alt: "",
  },
  {
    id: 10,
    logo: NAVIFORCE,
    name: "Navirorce",
    alt: "",
  },
];

const TopBrands = () => {
  return (
    <div className=" bg-black text-white py-12 ">
      <p className="text-center text-4xl font-semibold tex">TOP BRANDS</p>

      <section className="ezy__clients3 light text-zinc-900 dark:text-white ">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-5 lg:pl-16 mx-7 mt-5 justify-center items-center text-center ">
            {clientLogos.map((client, i) => (
              <Link to={`/products?brand=${client.name}`} id={client.id}>
                <img
                  src={client.logo}
                  alt={client.name}
                  className=" h-auto max-w-full px-12 my-2 lg:my-8 "
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
