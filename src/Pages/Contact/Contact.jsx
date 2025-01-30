import React, { useEffect } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { BiSolidPhoneCall } from "react-icons/bi";

const Contact = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="relative ">
      <div className="flex flex-col lg:flex-row pt-16 px-10 pb-16 mb-10 w-full   bg-black ">
        <div>
          <div className="mt-8 text-center lg:text-left">
            <h1 className="text-3xl lg:text-5xl font-semibold animate-fade-up text-white">
              Contact Us
            </h1>
            <p className="text-lg text-gray-400 pt-3  lg:w-[75%]  pb-5">
              Get In touch with us. For questions, feedback, or to connect,
              reach out anytime through email, call, or visit us.
            </p>
          </div>
        </div>

        <div className="lg:w-3/4 md:w-3/4 px-8 md:px-6 py-8 border border-gray-200  rounded-lg shadow-md  bg-white ">
          <div className="text-2xl font-bold mb-6 text-center md:text-left ">
            Get In Touch
          </div>
          <form action="#" className="w-full ">
            <div className="flex flex-wrap -mx-2 mb-6">
              <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                <input
                  type="text"
                  placeholder="Name"
                  required
                  className="w-full h-12 border border-gray-300 rounded-md px-4 focus:outline-none focus:border-blue-400 transition duration-300"
                />
              </div>
              <div className="w-full md:w-1/2 px-2">
                <input
                  type="email"
                  placeholder="Email"
                  required
                  className="w-full h-12 border border-gray-300 rounded-md px-4 focus:outline-none focus:border-blue-400 transition duration-300"
                />
              </div>
            </div>
            <div className="mb-6">
              <input
                type="text"
                placeholder="Subject"
                required
                className="w-full h-12 border border-gray-300 rounded-md px-4 focus:outline-none  focus:border-blue-400 transition duration-300"
              />
            </div>
            <div className="mb-6">
              <textarea
                cols="30"
                rows="10"
                placeholder="Write your Message..."
                required
                className="w-full h-32 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-400  transition duration-300"
              ></textarea>
            </div>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="rounded-full group mt-2  border border-black  relative h-12 w-44 overflow-hidden font-bold bg-slate-50 text-lg shadow-md hover:shadow-lg hover:bg-black"
              >
                <div className=""></div>
                <span className="relative text-black group-hover:text-white ">
                  Send Message
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Address part */}
      <div className="md:w-[95%] md:gap-x-3 lg:gap-0 flex flex-col justify-between md:flex-row my-16 items-center mx-auto">
        <div className="lg:w-[40%] md:w-[60%] w-[95%] h-[300px] lg:h-[480px] md:h-[230px]  mt-5 md:mt-0">
          <iframe
            className="w-full h-full rounded-xl shadow-x"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d922.4512217194696!2d91.8140612695338!3d22.360994938988757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd88d0af07d61%3A0xbbf9590c4e77a64d!2sRoad%20No.%201%2C%20Chittagong!5e0!3m2!1sen!2sbd!4v1714885505967!5m2!1sen!2sbd"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="flex-1 lg:mx-24 mt-10">
          <p className="lg:text-4xl text-2xl font-semibold md:mb-5 mb-4 text-center lg:text-left">
            Our Office Address
          </p>
          <p className="text-lg text-gray-500 pt-3  lg:w-[75%]  pb-5 text-center lg:text-left">
            Experience SM Foods, delivered right to your doorstep. Order online
            and enjoy quality at home!
          </p>
          <div className="p-4 flex lg:flex-col gap-x-3">
            <FaLocationDot className="lg:text-5xl text-xl text-black  border rounded-full p-2 mb-3" />
            <p className="lg:text-xl ">
              Nasirabad Properties Road 1, House-2,
              <br /> Chittagong, Bangladesh.
            </p>
          </div>
          <div className="p-4 flex lg:flex-col gap-x-3">
            <MdEmail className="lg:text-5xl text-xl text-black  border rounded-full p-2 mb-3" />
            <p className="lg:text-xl ">
              Nasirabad Properties Road 1, House-2,
              <br /> Chittagong, Bangladesh.
            </p>
          </div>
          <div className="p-4 flex lg:flex-col gap-x-3">
            <BiSolidPhoneCall className="lg:text-5xl text-xl text-black  border rounded-full p-2 mb-3" />
            <p className="lg:text-xl ">
              Nasirabad Properties Road 1, House-2,
              <br /> Chittagong, Bangladesh.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
