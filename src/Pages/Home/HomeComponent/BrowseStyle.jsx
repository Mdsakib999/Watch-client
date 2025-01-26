import React from "react";

const BrowseStyle = () => {
  return (
    <div className="my-10 mx-16 rounded-3xl bg-gray-100 py-12">
      <p className="text-center text-4xl font-semibold tex">Browse By Style</p>

      <div className="grid grid-cols-3 gap-4 px-20 ">

        <div className="col-span-2  bg-white mt-8 rounded-2xl">
          <div className="flex justify-evenly">
            <p className="text-3xl font-bold mt-4">Casual</p>
            <img
              className="w-[300px]"
              src="https://img.freepik.com/premium-vector/mechanical-watch-classic-design-realistic-wristwatch-luxury-fashion-object-men-white_87946-6616.jpg?w=360"
              alt=""
            />
          </div>
        </div>

        <div className=" bg-white mt-8 rounded-2xl ">
        <div className="flex justify-evenly">
            <p className="text-3xl font-bold mt-4 ml-4">Casual</p>
            <img
              className="max-w-[250px]"
              src="https://img.freepik.com/free-vector/realistic-smart-watch_1284-10933.jpg?t=st=1737808001~exp=1737811601~hmac=f3b1f0cfef96182fcbefc6d7fced22f78fcb5b12498ff6b21d1cab6a2e66e084&w=740"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 px-20 ">

        

        <div className=" bg-white mt-8 rounded-2xl ">
        <div className="flex justify-evenly">
            <p className="text-3xl font-bold mt-4 ml-4">Women</p>
            <img
              className="max-w-[250px]"
              src="https://img.freepik.com/free-photo/stylish-golden-watch-white-surface_181624-27078.jpg"
              alt=""
            />
          </div>
        </div>

        <div className="col-span-2  bg-white mt-8 rounded-2xl">
          <div className="flex justify-evenly">
            <p className="text-3xl font-bold mt-4">Men</p>
            <img
              className="w-[300px]"
              src="https://img.freepik.com/free-vector/smart-watch-realistic-image-black_1284-11873.jpg?t=st=1737807985~exp=1737811585~hmac=5beaa04771614566ac7e32b09704834a8569fd6300745cc184a0f38321de58fb&w=740"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowseStyle;
