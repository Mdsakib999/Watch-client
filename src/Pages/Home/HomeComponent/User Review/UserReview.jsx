import {
    FaQuoteLeft,
    FaQuoteRight,
    FaRegStarHalfStroke,
    FaStar,
} from "react-icons/fa6";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./UserReview.css";


const testimonials = [
    {
      id: 1,
      name: "Michael R.",
      image:
        "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_1.jpeg",
      review:
        "The build quality is phenomenal. I wear this watch every day and get constant compliments! Highly recommended for watch enthusiasts.",
    },
    {
      id: 2,
      name: "Sarah Jenkins",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      review:
        "Absolutely stunning detail and craftsmanship. The purchasing process was seamless and delivery was surprisingly fast.",
    },
    {
      id: 3,
      name: "Christoper Nolan",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      review:
        "A premium timepiece that feels luxurious without the exorbitant price tag. It pairs perfectly with both casual and formal wear.",
    },
    {
      id: 4,
      name: "Justin Doe",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      review:
        "I bought this as a gift for my father and he hasn't taken it off since. The elegant design truly speaks for itself.",
    },
    {
      id: 5,
      name: "Katrin Langford",
      image:
        "https://i.pinimg.com/736x/1c/32/87/1c328761cabc0700ea58ef00a35845d3.jpg",
      review:
        "Exceeded all my expectations. The customer service team was also very responsive to my inquiries prior to purchasing.",
    },
    {
      id: 6,
      name: "Davis Julia",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      review:
        "Beautiful watch! It keeps perfect time and the strap is surprisingly comfortable all day long. A fantastic purchase.",
    },
  ];

  const TestimonialCard = ({ name, image, review }) => (
    <div className="w-[90%] mx-auto md:w-full bg-slate-100  rounded-xl shadow-xl hover:-translate-y-1 transition-transform duration-300 mt-3 mb-16">
      <div className="px-6 md:px-12 py-5 md:pt-8 md:text-lg font-semibold font-mono leading-8 relative">
        <p className="text-center z-10 relative">{review}</p>
        <FaQuoteRight className="absolute text-8xl right-7 bottom-1 md:bottom-0 lg:right-10 lg:bottom-4 text-gray-300 opacity-70 z-0" />
        <FaQuoteLeft className="absolute text-8xl left-5 top-0 text-gray-300 opacity-70 z-0" />
      </div>
      <div className="flex items-center justify-center pb-4 ">
        <img
          className="mr-2 w-[57px] h-[57px] rounded-full border-2 border-gray-400"
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
    <p className="md:text-4xl text-3xl font-semibold mb-6 text-center lg:text-left">
      Our Happy Customers
    </p>
    <p className="md:w-[50%] md:mx-auto lg:mx-0 w-[90%] mb-5 text-slate-500 text-center lg:text-left">
      Discover why so many watch enthusiasts trust SM Watch. Read authentic reviews from our satisfied clients about their premium timepiece experience.
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