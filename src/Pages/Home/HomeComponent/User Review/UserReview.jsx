import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./UserReview.css";
import {
  FaQuoteRight,
  FaQuoteLeft,
  FaRegStarHalfStroke,
  FaStar,
} from "react-icons/fa6";
import { Pagination, Autoplay } from "swiper/modules";


const testimonials = [
    {
      id: 1,
      name: "Acton Musk",
      image:
        "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_1.jpeg",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi omnis reiciendis neque! Sunt asperiores architecto quibusdam itaque aut necessitatibus voluptate.",
    },
    {
      id: 2,
      name: "De Jong",
      image:
        "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/newscms/2016_19/1534611/160512-kim-jong-un-mn-1120.JPG",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi omnis reiciendis neque! Sunt asperiores architecto quibusdam itaque aut necessitatibus voluptate.",
    },
    {
      id: 3,
      name: "Cristoper Res",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwjlxr0kGZUyK3Gc8Wz4Ew2Oslvs7uFO2eqoys0dZBFM5Z7uTbsJkY-9zHpoZIybY4oBw&usqp=CAU",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi omnis reiciendis neque! Sunt asperiores architecto quibusdam itaque aut necessitatibus voluptate.",
    },
    {
      id: 4,
      name: "Justion Deo",
      image:
        "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/323100/323155.png",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi omnis reiciendis neque! Sunt asperiores architecto quibusdam itaque aut necessitatibus voluptate.",
    },
    {
      id: 5,
      name: "Katrin Langford",
      image:
        "https://i.pinimg.com/736x/1c/32/87/1c328761cabc0700ea58ef00a35845d3.jpg",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi omnis reiciendis neque! Sunt asperiores architecto quibusdam itaque aut necessitatibus voluptate.",
    },
    {
      id: 6,
      name: "Davis Julia",
      image:
        "https://lh3.googleusercontent.com/proxy/fDzBMad_F6MuY0oZc3RGlZa_Ull7ThFGRavtflCFLeqB2Rz7oE9hwd-1eN7hKg74YhIkOTRJzrPCCnQAgj8Jy6ROhl-K7sau",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi omnis reiciendis neque! Sunt asperiores architecto quibusdam itaque aut necessitatibus voluptate.",
    },
  ];

  const TestimonialCard = ({ name, image, review }) => (
    <div className="w-[90%] mx-auto md:w-full bg-gray-100  rounded-xl shadow-xl hover:-translate-y-1 transition-transform duration-300 mt-3 mb-16">
      <div className="px-6 md:px-12 py-5 md:pt-8 md:text-lg font-semibold font-mono leading-8 relative">
        <p className="text-center z-10 relative">{review}</p>
        <FaQuoteRight className="absolute text-8xl right-7 bottom-1 md:bottom-0 lg:right-10 lg:bottom-4 text-gray-300 opacity-70 z-0" />
        <FaQuoteLeft className="absolute text-8xl left-5 top-0 text-gray-300 opacity-70 z-0" />
      </div>
      <div className="flex items-center justify-center pb-4 ">
        <img
          className="mr-2 w-[57px] h-[57px] rounded-full border-2 border-orange-500"
          src={image}
          alt={name}
        />
        <div>
          <h5 className="text-xl font-medium">{name}</h5>
          <div className="flex gap-2 text-orange-500">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaRegStarHalfStroke />
          </div>
        </div>
      </div>
    </div>
  );


const UserReview = () => (
    <div className="home-customer md:w-[85%] mx-auto mb-20 pt-10  max-w-[1500px] ">
    <p className="md:text-4xl text-3xl font-semibold mb-6">
      Our Happy Customers
    </p>
    <p className="md:w-[50%] w-[90%] mb-5 text-slate-500">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor suscipit
      nemo voluptates quas adipisci accusantium facere delectus vero dignissimos
      doloribus.
    </p>
    <Swiper
      slidesPerView={2}
      spaceBetween={80}
      loop
      autoplay={{ delay: 3500, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      modules={[Pagination, Autoplay]}
      breakpoints={{
        0: { slidesPerView: 1, spaceBetween: 20 },
        640: { slidesPerView: 2, spaceBetween: 40 },
        768: { slidesPerView: 2, spaceBetween: 80 },
      }}
      className="mySwiper"
    >
      {testimonials.map(({ id, name, image, review }) => (
        <SwiperSlide key={id}>
          <TestimonialCard name={name} image={image} review={review} />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>

);

export default UserReview;